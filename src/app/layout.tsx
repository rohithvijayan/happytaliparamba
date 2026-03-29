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

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://santhoshamtaliparamba.in";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Santhosham Taliparamba | Happiness & Progress",
    template: "%s | Santhosham Taliparamba",
  },
  description: "Stability, Trust, and a Brighter Future for every generation in Taliparamba. Development, Welfare, and Unity for the people of Taliparamba constituency.",
  keywords: ["Taliparamba", "Santhosham", "Taliparamba constituency", "Kerala development", "LDF", "KIIFB", "Taliparamba MLA", "ML Govindhan Master", "Happiness Fest", "TDMC tourism"],
  authors: [{ name: "Santhosham Taliparamba" }],
  creator: "Santhosham Taliparamba",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "ml_IN",
    alternateLocale: "en_IN",
    url: baseUrl,
    siteName: "Santhosham Taliparamba",
    title: "Santhosham Taliparamba | Happiness & Progress",
    description: "Stability, Trust, and a Brighter Future for every generation in Taliparamba.",
    images: [
      {
        url: "/tourismHero.jpeg",
        width: 1200,
        height: 630,
        alt: "Santhosham Taliparamba - Happiness & Progress",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Santhosham Taliparamba | Happiness & Progress",
    description: "Stability, Trust, and a Brighter Future for every generation in Taliparamba.",
    images: ["/tourismHero.jpeg"],
  },
};

import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ml" className="scroll-smooth" suppressHydrationWarning>
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
