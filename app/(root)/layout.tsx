import React from "react";
import { Metadata } from "next";
import { createClient } from "@/utils/supabase/server";
import { MessageHandler } from "@/components/ui/message-handler";

export const metadata: Metadata = {};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const { data } = await supabase.auth.getUser();
  if (data) console.log(data.user);
  return (
    <>
      <MessageHandler />
      <div className="min-h-screen bg-background text-foreground">
        <div className="flex h-screen flex-col items-center justify-center bg-background text-foreground">
          {children}
        </div>
      </div>
    </>
  );
}
