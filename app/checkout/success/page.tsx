import { checkPaymentStatus } from "@/lib/check-payment-status";
import { ArrowLeft, CheckCircle, Mail } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GithubUsername } from "@/components/github-username";
import { Template } from "@/types";

export default async function CheckoutSuccess({
  searchParams,
}: {
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
}) {
  const params = await searchParams;
  const payment_id = params.payment_id as string;
  const status = params.status as string;

  const paymentResult = await checkPaymentStatus({ paymentId: payment_id });
  console.log("payment is", JSON.stringify(paymentResult));

  if (!payment_id || status === "failed" || paymentResult.error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-background">
        <Card className="w-full max-w-md p-8 text-center">
          <p className="text-destructive font-semibold">
            Something went wrong with your payment. Please try again.
          </p>
          <Link href="/">
            <Button className="mt-6 w-full">Back to Home</Button>
          </Link>
        </Card>
      </div>
    );
  }

  const userData = paymentResult.data?.user;
  const paymentData = paymentResult.data;

  const templateName = paymentData?.product.template;
  const cloneCommand = `git clone https://github.com/Yashraj-Verma/buildfast-${(templateName ===
  Template.STARTER
    ? "starter"
    : "pro"
  ).toLowerCase()}.git`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="p-4 sm:p-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors max-w-2xl"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-medium text-foreground">
            Back to Home
          </span>
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-2xl">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <div className="bg-primary/10 rounded-full p-4">
                <CheckCircle className="w-12 h-12 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Thank You!
            </h1>
            <p className="text-lg text-muted-foreground">
              Your subscription to{" "}
              <span className="font-semibold text-primary">{templateName}</span>{" "}
              has been activated
            </p>
          </div>

          {/* Main Content Card */}
          <Card className="p-6 sm:p-8 border-border/50 shadow-sm">
            {/* Email Notification Section */}
            <div className="mb-2 pb-8 border-b border-border/50">
              <div className="flex gap-4">
                <div className="shrink-0">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                </div>
                <div>
                  <h2 className="text-base font-semibold text-foreground mb-2">
                    Email Confirmation Sent
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    We've sent a confirmation email to{" "}
                    <span className="font-medium text-foreground">
                      {userData?.email}
                    </span>{" "}
                    with your private repository link and setup instructions.
                  </p>
                </div>
              </div>
            </div>

            {/* GitHub Clone Section */}
            <div>
              <h2 className="text-base font-semibold text-foreground mb-4">
                Alternatively add your Github Username to get access to the repo
              </h2>
              <GithubUsername
                githubId={userData?.githubId as string}
                cloneCommand={cloneCommand}
                templateName={templateName as string}
                paymentId={payment_id}
              />
            </div>
          </Card>

          {/* Additional Info */}
          <div className="bg-accent/50 rounded-lg p-4 text-center">
            <p className="text-sm text-foreground/80">
              <span className="font-medium">Need help?</span> Check your email
              for detailed setup instructions or visit our documentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
