"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function HomeButton() {
  const router = useRouter();
  return (
    <Button
      variant="destructive"
      onClick={() => {
        router.push("/");
      }}
    >
      Go to Home
    </Button>
  );
}
