import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KIIFB Projects | Strategic Infrastructure in Taliparamba",
  description: "Kerala Infrastructure Investment Fund Board (KIIFB) projects in Taliparamba constituency — track funding, status, and progress of strategic infrastructure developments.",
  openGraph: {
    url: "/kiifb",
  },
};

export default function KiifbLayout({ children }: { children: React.ReactNode }) {
  return children;
}
