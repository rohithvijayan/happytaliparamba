import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Happiness Fest | Taliparamba Celebration",
  description: "Happiness Fest — a grand cultural celebration in Taliparamba uniting people through art, culture, and community events. Experience the joy of Taliparamba together.",
  openGraph: {
    url: "/happiness-fest",
    images: [{ url: "/happpinesfest/640326842_18037371050772583_8221332421069935018_n.webp", width: 1200, height: 630, alt: "Happiness Fest Taliparamba" }],
  },
};

export default function HappinessFestLayout({ children }: { children: React.ReactNode }) {
  return children;
}
