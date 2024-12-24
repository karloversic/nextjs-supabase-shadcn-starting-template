import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { MessageHandler } from "@/components/ui/message-handler";

export const metadata: Metadata = {
  title: "NextJS + Supabase + Shadcn starting template",
  description:
    "Nextjs app template with Supabase Auth (email&password + Google authentication) together with shadcn/ui theme provider",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
