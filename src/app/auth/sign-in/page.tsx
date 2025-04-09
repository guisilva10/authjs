"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function Page() {
  const handleGoogleLogin = async () => {
    try {
      await signIn("google", { callbackUrl: "/app" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Button onClick={() => handleGoogleLogin()}>Logar com google</Button>
    </div>
  );
}
