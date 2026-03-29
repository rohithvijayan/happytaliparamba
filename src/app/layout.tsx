import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Anek_Malayalam } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

const anekMalayalam = Anek_Malayalam({
  variable: "--font-anek-malayalam",
  subsets: ["malayalam"],
  weight: ["400", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

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
    <html lang="ml" className="scroll-smooth">
      <head>
        {/* Preconnect so the font CDN handshake happens in parallel with HTML parse */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Material Symbols — display=swap prevents render-blocking while glyphs load */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${anekMalayalam.variable} antialiased font-sans bg-brand-obsidian text-slate-100 min-h-screen pt-20 overflow-x-hidden w-full`}
      >
        <Header />
        <div className="overflow-x-hidden w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
