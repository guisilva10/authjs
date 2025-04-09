import { auth } from "@/services/auth";
import LogOutButton from "./_components/logout-button";

export default async function Page() {
  const session = await auth();

  return (
    <div className="flex items-center justify-center h-screen flex-col gap-y-4">
      Hello {session?.user.name}
      <LogOutButton />
    </div>
  );
}
