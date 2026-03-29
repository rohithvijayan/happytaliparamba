import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Anek_Malayalam } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const anekMalayalam = Anek_Malayalam({
  variable: "--font-anek-malayalam",
  subsets: ["malayalam"],
  weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
  title: "santhoshamTaliparamaba | Happiness & Progress",
  description: "Stability, Trust, and a Brighter Future for every generation in Taliparamba.",
};

import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Anek+Malayalam:wght@800&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${anekMalayalam.variable} antialiased font-sans bg-brand-obsidian text-slate-100 min-h-screen pt-20 overflow-x-hidden w-full`}
        suppressHydrationWarning
      >
        <Header />
        <div className="overflow-x-hidden w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
