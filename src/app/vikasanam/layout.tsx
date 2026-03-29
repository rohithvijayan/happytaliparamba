import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vikasanam | Infrastructure & Development Projects",
  description: "Track all constituency development and infrastructure projects in Taliparamba — completed, ongoing, and approved — with real-time status and estimated costs.",
  openGraph: {
    url: "/vikasanam",
  },
};

export default function VikasanamLayout({ children }: { children: React.ReactNode }) {
  return children;
}
