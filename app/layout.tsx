import type { Metadata } from "next";
import { montserrat, mochiyPopOne} from "./fonts";
import "./globals.css";


export const metadata: Metadata = {
  title: "News Aggragtor",
  description: "Your number one source for the latest news articles from around the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} ${mochiyPopOne.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
