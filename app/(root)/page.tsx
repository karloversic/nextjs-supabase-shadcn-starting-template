"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Github,
  Lock,
  Palette,
  Code,
  Timer,
  MessageSquare,
  Shield,
  Rocket,
  Zap,
  Check,
} from "lucide-react";
import Link from "next/link";
import CodeBox from "@/components/landing/code-box";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-8 sm:py-16 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
          Build Faster with Next.js
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
          A production-ready template combining the power of Next.js, Supabase
          Auth, and ShadCN/UI. Start building your next project in minutes, not
          hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-12">
          <Link href="https://github.com/karloversic/nextjs-supabase-shadcn-starting-template">
            <Button className="w-full sm:w-auto gap-2" size="lg">
              <Github className="w-5 h-5" />
              Get Started
            </Button>
          </Link>
          <Link href="/documentation">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto gap-2"
            >
              <Code className="w-5 h-5" />
              View Documentation
            </Button>
          </Link>
        </div>
        <CodeBox command="npx create-next-app -e https://github.com/karloversic/nextjs-supabase-shadcn-starting-template" />
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">🚀 Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Lock,
              title: "Authentication",
              description:
                "Secure authentication with email/password and social logins via Supabase.",
            },
            {
              icon: Palette,
              title: "Beautiful UI",
              description:
                "Stunning themes with ShadCN/UI. Fully customizable components.",
            },
            {
              icon: Timer,
              title: "Time-Saving",
              description:
                "Pre-configured routing, auth, and styling for rapid development.",
            },
            {
              icon: MessageSquare,
              title: "Message Handling",
              description:
                "Real-time messaging with efficient state management.",
            },
          ].map((feature, index) => (
            <Card key={index} className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <feature.icon className="w-5 h-5 text-primary" />
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="container mx-auto px-4 py-8 sm:py-16 bg-secondary">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          🛠️ Powered By
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
          {["Next.js 14", "Supabase", "ShadCN/UI", "Tailwind"].map(
            (tech, index) => (
              <Card key={index} className="text-center border-border">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl md:text-2xl">
                    {tech}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {index === 0
                      ? "React Framework"
                      : index === 1
                        ? "Auth & Database"
                        : index === 2
                          ? "UI Components"
                          : "Styling"}
                  </p>
                </CardContent>
              </Card>
            ),
          )}
        </div>
      </section>

      {/* Why Choose Us Section  */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          💡 Why Choose This Template?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Rocket className="w-6 h-6 text-primary" />
                Built for Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-accent" />
                  Optimized build configuration
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-accent" />
                  Performance optimized
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-accent" />
                  Messages provider
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-primary" />
                Developer Focused
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  TypeScript support
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  ESLint & Prettier
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  Middleware authentication
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Start Section  */}
      <section className="container mx-auto px-4 py-8 sm:py-16 bg-secondary">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          ⚡ Quick Start
        </h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {[
            {
              title: "1. Create Project",
              command:
                "npx create-next-app -e https://github.com/karloversic/nextjs-supabase-shadcn-starting-template",
            },
            {
              title: "2. Configure Environment Variables",
              command: "cp .env.example .env.local",
            },
            { title: "3. Launch", command: "npm run dev" },
          ].map((step, index) => (
            <Card key={index} className="border-border">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl md:text-2xl">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CodeBox command={step.command} useCard={false} />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Github Star Section  */}
      <section className="container mx-auto px-4 py-8 sm:py-16">
        <Card className="max-w-4xl mx-auto bg-primary text-primary-foreground">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                Ready to Start Building?
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-primary-foreground/70 mb-4">
                Get started with our template and build your next project
                faster.
              </p>
              <Link href="https://github.com/karloversic/nextjs-supabase-shadcn-starting-template">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto gap-2"
                >
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
