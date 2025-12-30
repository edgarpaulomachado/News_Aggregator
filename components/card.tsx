'use client';

import React from "react";
import Image from 'next/image';
import { montserrat } from "@/app/fonts";
import { CardProps } from "@/types/card";
import { Separator } from "./ui/separator";

export default function Card({id, title, description, imageUrl, autor, publishedAt} : CardProps) {
    return(
        <div className="w-90 h-128">
            <Image src={imageUrl} alt={""} width={360} height={315}/>
            <h1 className={`${montserrat.className} text-xl font-semibold text-[#1C1C1C] mt-2`}>{title}</h1>
            <p className={`${montserrat.className} text-sm text-[#1C1C1C] mt-3`}>{description}</p>

            <Separator className="my-5 bg-[#1C1C1C]" orientation="horizontal"/>

            <div className="flex justify-between">
                <span className={`${montserrat.className} text-sm text-[#1C1C1C] font-semibold`}>{autor}</span>
                <span className={`${montserrat.className} text-sm text-[#000000]`}>{publishedAt}</span>
            </div>
        </div>
    )
}