import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { MessageProvider } from "@/context/MessagesProvider";
import { MessageHandler } from "@/components/shared/message-handler";

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
      <body>
        <MessageProvider>
          <MessageHandler />
          {children}
        </MessageProvider>
      </body>
    </html>
  );
}
