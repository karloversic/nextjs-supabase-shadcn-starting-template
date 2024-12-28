"use client";

import { Moon, Sun, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  useEffect(() => {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    setTheme(isDarkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, []);

  const NavItems = () => (
    <>
      <Link href="/documentation">
        <Button variant="ghost" className="dark:hover:bg-neutral-800" size="sm">
          Docs
        </Button>
      </Link>
      <Link href="/login">
        <Button
          variant="outline"
          className="dark:border-neutral-700 dark:hover:bg-neutral-800"
          size="sm"
        >
          Sign In
        </Button>
      </Link>
      <Link href="/signup">
        <Button size="sm">Sign Up</Button>
      </Link>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-background border-b dark:border-neutral-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Zap className="w-6 h-6" />
            <span className="font-bold text-xl">NextAuth Template</span>
          </Link>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="dark:hover:bg-neutral-800"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <div className="hidden sm:flex items-center gap-4">
              <NavItems />
            </div>
            <div className="sm:hidden">
              <Button size="sm">Sign In</Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
