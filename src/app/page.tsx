import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <Button>
          <Link href="/auth/sign-in">Entrar na conta</Link>
        </Button>
      </div>
    </main>
  );
}
