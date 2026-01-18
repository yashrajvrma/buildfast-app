import { prisma } from "@/db";
import { NextRequest, NextResponse } from "next/server";
import { App } from "@octokit/app";

const GITHUB_ORG = process.env.GITHUB_ORG || "Yashraj-Verma";

const TEMPLATE_REPO_MAP: Record<string, string> = {
  STARTER: "buildfast-starter",
  PRO: "buildfast-pro",
};

// --------------------
// GitHub App bootstrap
// --------------------
function getGitHubApp() {
  const { GITHUB_APP_ID, GITHUB_APP_PRIVATE_KEY } = process.env;

  if (!GITHUB_APP_ID || !GITHUB_APP_PRIVATE_KEY) {
    throw new Error("GitHub App environment variables missing");
  }

  return new App({
    appId: GITHUB_APP_ID,
    privateKey: GITHUB_APP_PRIVATE_KEY.replace(/\\n/g, "\n"),
  });
}

async function getInstallationOctokit() {
  const { GITHUB_APP_INSTALLATION_ID } = process.env;

  if (!GITHUB_APP_INSTALLATION_ID) {
    throw new Error("GitHub App installation ID missing");
  }

  const app = getGitHubApp();
  return await app.getInstallationOctokit(Number(GITHUB_APP_INSTALLATION_ID));
}

// --------------------
// GitHub helpers
// --------------------
async function grantRepoAccess(username: string, repo: string) {
  const octokit = await getInstallationOctokit();

  try {
    const { status } = await octokit.request(
      "PUT /repos/{owner}/{repo}/collaborators/{username}",
      {
        owner: GITHUB_ORG,
        repo,
        username,
        permission: "pull", // read-only access
      },
    );

    if (status === 201) return "Repository invitation sent successfully";
    if (status === 204) return "User already has access to this repository";

    throw new Error("Failed to grant repository access");
  } catch (err: any) {
    // Handle user not found or other errors
    if (err.status === 404) {
      throw new Error(`GitHub user '${username}' not found`);
    }
    throw err;
  }
}

// --------------------
// API Route
// --------------------
export async function POST(req: NextRequest) {
  try {
    const { githubId, paymentId } = await req.json();
    if (!githubId || !paymentId) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const payment = await prisma.payment.findUnique({
      where: { paymentId },
      include: { user: true, product: true },
    });

    if (!payment || payment.status !== "SUCCESS") {
      return NextResponse.json(
        { error: "Invalid or incomplete payment" },
        { status: 400 },
      );
    }

    if (payment.user.githubId) {
      return NextResponse.json({
        success: true,
        alreadyConfigured: true,
        repository: `${GITHUB_ORG}/${
          TEMPLATE_REPO_MAP[payment.product.template]
        }`,
        message: "GitHub access already configured",
      });
    }

    const repoName = TEMPLATE_REPO_MAP[payment.product.template];
    if (!repoName) {
      return NextResponse.json(
        { error: "Invalid product template" },
        { status: 400 },
      );
    }

    // Grant access to ONLY the specific repository
    const githubUsername = githubId.trim();
    const repoMsg = await grantRepoAccess(githubUsername, repoName);

    // Update user's GitHub username in database
    await prisma.user.update({
      where: { id: payment.user.id },
      data: { githubId: githubUsername },
    });

    return NextResponse.json({
      success: true,
      message: repoMsg,
      cloneCommand: `git clone https://github.com/${GITHUB_ORG}/${repoName}.git`,
    });
  } catch (err: any) {
    console.error("GitHub App error:", err);
    return NextResponse.json(
      { error: err.message || "Internal server error" },
      { status: 500 },
    );
  }
}
