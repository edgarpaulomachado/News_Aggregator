'use client';

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { mochiyPopOne, montserrat } from "@/app/fonts";

type AuthType = "signin" | "signup";

interface AuthDialogProps {
  type: AuthType;
}

export default function AuthDialog({ type }: AuthDialogProps) {
  const isSignIn = type === "signin";

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className={`${montserrat.className} w-20.5 h-10 ${
            isSignIn
              ? "text-[#6B6B6B]"
              : "bg-[#1C1C1C] text-white rounded-md"
          } text-sm font-medium cursor-pointer`}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
      </DialogTrigger>

      <DialogContent className="w-100 p-6 rounded-lg bg-white border-none">
        <DialogHeader>
          <DialogTitle
            className={`${mochiyPopOne.className} text-black text-2xl font-medium`}
          >
            {isSignIn ? "Sign In" : "Create account"}
          </DialogTitle>

          <DialogDescription
            className={`${montserrat.className} text-[#6B6B6B] text-xs mt-2`}
          >
            {isSignIn
              ? "Please enter your email and password to sign in."
              : "Fill in the fields below to create your account."}
          </DialogDescription>
        </DialogHeader>

        <form className="grid gap-4">
          {!isSignIn && (
            <div className="grid gap-3">
              <Label className={`${montserrat.className} text-xs text-[#1C1C1C]`}>
                Your name
              </Label>
              <Input
                placeholder="Your name"
                className={`${montserrat.className} border-2 border-[#1C1C1C] rounded-none focus-visible:ring-0`}
              />
            </div>
          )}

          <div className="grid gap-3">
            <Label className={`${montserrat.className} text-xs text-[#1C1C1C]`}>
              Your email
            </Label>
            <Input
              type="email"
              placeholder="Your email"
              className={`${montserrat.className} border-2 border-[#1C1C1C] rounded-none placeholder:text-xs focus-visible:ring-0`}
            />
          </div>

          <div className="grid gap-3">
            <Label className={`${montserrat.className} text-xs text-[#1C1C1C]`}>
              Your password
            </Label>
            <Input
              type="password"
              placeholder="Your password"
              className={`${montserrat.className} border-2 border-[#1C1C1C] rounded-none placeholder:text-xs focus-visible:ring-0`}
            />
          </div>

          <DialogFooter>
            <button
              type="submit"
              className={`${montserrat.className} w-full h-13 bg-[#1C1C1C] text-white text-sm rounded-md mt-4`}
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
