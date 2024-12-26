"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Lock, Palette, Code, Timer, Settings } from "lucide-react";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-6">Build Faster with Next.js</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          A production-ready template combining the power of Next.js, Supabase
          Auth, and ShadCN/UI. Start building your next project in minutes, not
          hours.
        </p>
        <div className="flex gap-4 justify-center mb-12">
          <Link href="https://github.com/karloversic/nextjs-supabase-shadcn-starting-template">
            <Button className="gap-2" size="lg">
              <Github className="w-5 h-5" />
              Get Started
            </Button>
          </Link>
          <Link href="https://nextjs-supabase-shadcn-starting-template.vercel.app">
            <Button variant="outline" size="lg" className="gap-2">
              <Code className="w-5 h-5" />
              View Demo
            </Button>{" "}
          </Link>
        </div>
        <div className="bg-muted p-4 rounded-lg max-w-xl mx-auto">
          <code className="text-sm">
            npx create-next-app -e
            https://github.com/karloversic/nextjs-supabase-shadcn-starting-template
          </code>
        </div>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">🚀 Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-5 h-5" />
                Authentication
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Secure authentication with email/password and social logins.
                Powered by Supabase for reliable, scalable auth.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5" />
                Beautiful UI
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Stunning light and dark themes with ShadCN/UI. Fully
                customizable components for any design needs.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Timer className="w-5 h-5" />
                Time-Saving
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Skip the setup hassle. Get straight to building with
                pre-configured routing, auth, and styling.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="container mx-auto px-4 py-16 bg-muted/50">
        <h2 className="text-3xl font-bold text-center mb-12">🛠️ Powered By</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <Card className="text-center">
            <CardHeader>
              <CardTitle>Next.js 14</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">React Framework</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle>Supabase</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Auth & Database</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle>ShadCN/UI</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">UI Components</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle>Tailwind</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Styling</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us Section  */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          💡 Why Choose This Template?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Production Ready</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Settings className="w-4 h-4 text-green-500" />
                  Optimized build configuration
                </li>
                <li className="flex items-center gap-2">
                  <Settings className="w-4 h-4 text-green-500" />
                  SEO best practices
                </li>
                <li className="flex items-center gap-2">
                  <Settings className="w-4 h-4 text-green-500" />
                  Performance optimized
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Developer Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Settings className="w-4 h-4 text-green-500" />
                  TypeScript support
                </li>
                <li className="flex items-center gap-2">
                  <Settings className="w-4 h-4 text-green-500" />
                  ESLint & Prettier
                </li>
                <li className="flex items-center gap-2">
                  <Settings className="w-4 h-4 text-green-500" />
                  Git hooks with Husky
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Start Section  */}
      <section className="container mx-auto px-4 py-16 bg-muted/50 dark:bg-neutral-900/50">
        <h2 className="text-3xl font-bold text-center mb-12">⚡ Quick Start</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          <Card className="dark:border-neutral-800">
            <CardHeader>
              <CardTitle>1. Create Project</CardTitle>
            </CardHeader>
            <CardContent>
              <code className="bg-background p-2 rounded block dark:bg-neutral-800">
                npx create-next-app -e
                https://github.com/karloversic/nextjs-supabase-shadcn-starting-template
              </code>
            </CardContent>
          </Card>

          <Card className="dark:border-neutral-800">
            <CardHeader>
              <CardTitle>2. Configure Environment</CardTitle>
            </CardHeader>
            <CardContent>
              <code className="bg-background p-2 rounded block dark:bg-neutral-800">
                cp .env.example .env.local
                <br /># Update with your Supabase credentials
              </code>
            </CardContent>
          </Card>

          <Card className="dark:border-neutral-800">
            <CardHeader>
              <CardTitle>3. Launch</CardTitle>
            </CardHeader>
            <CardContent>
              <code className="bg-background p-2 rounded block dark:bg-neutral-800">
                npm run dev
              </code>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Github Star Section  */}
      <section className="container mx-auto px-4 py-16">
        <Card className="max-w-4xl mx-auto bg-primary text-primary-foreground">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Start Building?
              </h3>
              <p className="mb-6">
                Get started with our template and build your next project
                faster.
              </p>
              <Link href="https://github.com/karloversic/nextjs-supabase-shadcn-starting-template">
                <Button size="lg" variant="secondary" className="gap-2">
                  <Github className="w-5 h-5" />
                  Star on GitHub
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default LandingPage;
