import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t dark:border-neutral-800">
      <div className="container mx-auto px-4 py-8 flex flex-col justify-between items-center">
        <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
          Built with{" "}
          <Link
            className="hover:text-primary"
            href="https://www.linkedin.com/in/karloversic/"
          >
            ❤️
          </Link>{" "}
          using{" "}
          <Link className="hover:text-primary" href="https://nextjs.org/">
            Next.js
          </Link>
          ,{" "}
          <Link className="hover:text-primary" href="https://nextjs.org/">
            Supabase
          </Link>
          , and{" "}
          <Link className="hover:text-primary" href="https://nextjs.org/">
            ShadCN/UI
          </Link>
          .
        </p>
        {/*<nav className="flex gap-4">*/}
        {/*  <Link*/}
        {/*    href="/privacy"*/}
        {/*    className="text-sm text-muted-foreground hover:underline"*/}
        {/*  >*/}
        {/*    Privacy Policy*/}
        {/*  </Link>*/}
        {/*  <Link*/}
        {/*    href="/terms"*/}
        {/*    className="text-sm text-muted-foreground hover:underline"*/}
        {/*  >*/}
        {/*    Terms of Service*/}
        {/*  </Link>*/}
        {/*</nav>*/}
      </div>
    </footer>
  );
};

export default Footer;
