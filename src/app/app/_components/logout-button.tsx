"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

const LogOutButton = () => {
  return (
    <Button variant="destructive" onClick={() => signOut()}>
      Sair da conta
    </Button>
  );
};

export default LogOutButton;
