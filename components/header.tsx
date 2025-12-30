'use client';

import React from "react";
import { mochiyPopOne, montserrat } from "@/app/fonts";
import Link from "next/link";
import AuthDialog from "./auth/authDialog";

export default function Header() {
  return (
    <header className="w-full h-16 flex border-b-2 border-b-[#1C1C1C] items-center justify-center px-4">
      <div className="w-280 h-11.5 flex items-center">
        <div className="w-21.5 h-11.5">
            <h2 className={`${mochiyPopOne.className} text-[#1C1C1C] text-xl`}>News</h2>
            <p className={`${montserrat.className} text-[#B9B9B9] text-sm`}>Aggregator</p>
        </div>

        <div className="w-32 h-4 flex justify-between ml-6">
            <Link href={"/"} className={`${montserrat.className} text-[#1C1C1C] text-sm font-medium`}>Home</Link>
            <Link href={"/"} className={`${montserrat.className} text-[#1C1C1C] text-sm font-medium`}>About us</Link>
        </div>

        <div className="w-45 h-10 flex justify-end ml-auto">
            <AuthDialog type="signin" />
            <AuthDialog type="signup" />
        </div>
      </div>
    </header>
  );
}