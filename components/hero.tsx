'use client'

import React from "react";
import { mochiyPopOne, montserrat } from "@/app/fonts";
import { Funnel } from 'lucide-react';
import Image from "next/image";

export default function Hero() {
    return (
        <div className="w-full h-16 flex items-center justify-center px-4 mt-20">
            <div className="w-280 h-11.5 flex justify-between items-center">
                <div className="w-73 h-7 flex gap-1 items-end">
                    <h1 className={`${mochiyPopOne.className} text-[#000000] text-4xl`}>Articles</h1>
                    <p className={`${montserrat.className} text-[#6B6B6B] text-lg`}>(100 results)</p>
                </div>

                <div className="w-35 h-12 flex items-center justify-center gap-2 border-2 border-[#E0E0E0] rounded-md">
                    <Funnel size={16} color={"#6B6B6B"}/>
                    <p className={`${montserrat.className} text-[#6B6B6B] text-sm`}>Show filters</p>
                </div>
            </div>
        </div>
    );
}
