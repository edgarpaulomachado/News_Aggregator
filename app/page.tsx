'use client';

import React from "react";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Card from "@/components/card";
import { Images } from "@/assets/images";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />

      <section className="w-full h-auto flex justify-center mt-20">
        <div className="grid grid-cols-3 gap-5">
          <Card 
            id={"1"}
            title={"The Ultimate Guide to Bali: What to See, Do, and Eat"}
            description={"Malesuada egestas nunc vestibulum egestas mauris augue tempor scelerisque eros."}
            imageUrl={Images.Image1}
            autor={"Edgar Machado"} 
            publishedAt={"12/04/2023 13:40"}        
          />

          <Card 
            id={"1"}
            title={"The Ultimate Guide to Bali: What to See, Do, and Eat"}
            description={"Malesuada egestas nunc vestibulum egestas mauris augue tempor scelerisque eros."}
            imageUrl={Images.Image2}
            autor={"Edgar Machado"} 
            publishedAt={"12/04/2023 13:40"}        
          />

          <Card 
            id={"1"}
            title={"The Ultimate Guide to Bali: What to See, Do, and Eat"}
            description={"Malesuada egestas nunc vestibulum egestas mauris augue tempor scelerisque eros."}
            imageUrl={Images.Image3}
            autor={"Edgar Machado"} 
            publishedAt={"12/04/2023 13:40"}        
          />
        </div>
      </section>
    </>
  );
}
