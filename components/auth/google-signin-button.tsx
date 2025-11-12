"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth/auth-client";
import { useState } from "react";

export default function SignInWithGoogleButton() {
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    try {
      await signIn.social(
        {
          provider: "google",
          callbackURL: "/", // redirect url after the user signs in
          errorCallbackURL: "/error",
        },
        {
          onRequest: (ctx) => {
            // show loading
            setLoading(!loading);
          },
          onSuccess: (ctx) => {
            // redirect to the dashboard
            console.log("signin successful");
          },
          onError: (ctx) => {
            // display error message
          },
        }
      );
    } catch (error) {
      console.error("Something went wrong", error);
    } finally {
      setLoading(!loading);
    }
  };
  return (
    <Button
      disabled={loading}
      onClick={() => handleGoogleLogin()}
      variant="secondary"
    >
      Sign in with Google
    </Button>
  );
}
