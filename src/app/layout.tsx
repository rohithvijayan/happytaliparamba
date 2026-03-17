import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Noto_Sans_Malayalam } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const notoSansMalayalam = Noto_Sans_Malayalam({
  variable: "--font-noto-sans-malayalam",
  subsets: ["malayalam"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "santhoshamTaliparamaba | Happiness & Progress",
  description: "Stability, Trust, and a Brighter Future for every generation in Taliparamba.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${notoSansMalayalam.variable} antialiased font-sans bg-slate-50 dark:bg-[#0F172A] text-slate-900 dark:text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
