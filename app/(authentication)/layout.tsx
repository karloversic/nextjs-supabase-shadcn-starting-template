"use client";

import { MessageHandler } from "@/components/shared/message-handler";
import React, { Suspense } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Suspense>
        <MessageHandler />
      </Suspense>

      {children}
    </div>
  );
}
