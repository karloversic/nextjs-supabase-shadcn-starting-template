'use client'

import React, { useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signup } from "@/actions/userActions"

export default function Signup() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordsMatch, setPasswordsMatch] = useState(true)

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    setPasswordsMatch(e.target.value === confirmPassword)
  }

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value)
    setPasswordsMatch(e.target.value === password)
  }

  const handleSubmit = (formData: FormData) => {
    if (password === confirmPassword) {
      signup(formData)
    } else {
      setPasswordsMatch(false)
    }
  }

  return (
      <div className="flex h-screen w-full items-center justify-center px-4">
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Sign Up</CardTitle>
            <CardDescription>
              Create your account by filling in the details below
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={handleSubmit}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter a strong password"
                      required
                      value={password}
                      onChange={handlePasswordChange}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input
                      id="confirm-password"
                      name="confirm-password"
                      type="password"
                      placeholder="Re-enter your password"
                      required
                      value={confirmPassword}
                      onChange={handleConfirmPasswordChange}
                  />
                  {!passwordsMatch && (
                      <p className="text-sm text-red-500">Passwords do not match</p>
                  )}
                </div>
                <Button type="submit" className="w-full" disabled={!passwordsMatch}>
                  Sign Up
                </Button>
                <Button variant="outline" className="w-full">
                  <Image
                      src="/assets/images/svg/google-color.svg"
                      alt="Google logo"
                      width={20}
                      height={20}
                      priority
                  />
                  Continue with Google
                </Button>
              </div>
            </form>

            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="underline">
                Login
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
  )
}

