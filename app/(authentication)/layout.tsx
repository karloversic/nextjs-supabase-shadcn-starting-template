"use client";

import { MessageHandler } from "@/components/ui/message-handler";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <MessageHandler />
      {children}
    </div>
  );
}
