import { createClient } from "@/utils/supabase/server";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// import { ThemeToggle } from "@/components/ui/theme-toggle";

export default async function Home() {
  const supabase = await createClient();

  const { data } = await supabase.auth.getUser();

  return (
    <div className="w-full max-w-4xl text-center">
      <h1 className="mb-4 text-4xl font-bold">Welcome</h1>
      <p className="mb-8">Hello {data.user ? data.user.email : "Guest"}</p>
      <div className="flex items-center justify-center gap-4">
        {data.user ? (
          <>
            <Link href="/logout">
              <Button variant="outline">Logout</Button>
            </Link>
          </>
        ) : (
          <>
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </>
        )}

        {/*<ThemeToggle />*/}
      </div>
    </div>
  );
}
