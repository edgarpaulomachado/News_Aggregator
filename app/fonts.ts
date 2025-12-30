import { Mochiy_Pop_One, Montserrat } from "next/font/google";

export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400","500"]
});

export const mochiyPopOne = Mochiy_Pop_One({
  variable: "--font-mochiy-pop-one",
  subsets: ["latin"],
  weight: "400"
});