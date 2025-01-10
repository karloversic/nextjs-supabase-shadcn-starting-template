import Link from "next/link";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import React from "react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="mx-auto max-w-md text-center">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Oops, page not found!
          </h1>
          <p className="mt-4 text-muted-foreground">
            The page you&#39;re looking for doesn&#39;t exist. It might have
            been moved or deleted.
          </p>
          <div className="mt-6">
            <Link href="http://localhost:3000">
              <Button>Go to Homepage</Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
