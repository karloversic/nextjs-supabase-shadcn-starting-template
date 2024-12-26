"use client";

import { Moon, Sun, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  React.useEffect(() => {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    setTheme(isDarkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, []);

  return (
    <nav className="border-b dark:border-neutral-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6" />
            <span className="font-bold text-xl">NextAuth Template</span>
          </div>

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
            </Button>
            <Button variant="ghost" className="dark:hover:bg-neutral-800">
              Documentation
            </Button>
            <Button
              variant="outline"
              className="dark:border-neutral-700 dark:hover:bg-neutral-800"
            >
              Sign In
            </Button>
            <Button>Sign Up</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
