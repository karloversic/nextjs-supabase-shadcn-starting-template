import React from "react";
import { Metadata } from "next";
import { createClient } from "@/utils/supabase/server";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";

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
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
