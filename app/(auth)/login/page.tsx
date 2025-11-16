import SignInWithGoogleButton from "@/components/button/google-signin";
import { auth } from "@/lib/auth/auth-server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function SignIn() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect("/");
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <SignInWithGoogleButton />
    </div>
  );
}
