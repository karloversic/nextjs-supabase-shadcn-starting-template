import React from "react";

const Footer = () => {
  return (
    <footer className="border-t dark:border-neutral-800">
      <div className="container mx-auto px-4 py-8 flex flex-col justify-between items-center">
        <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
          Built with ❤️ using Next.js, Supabase, and ShadCN/UI.
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
