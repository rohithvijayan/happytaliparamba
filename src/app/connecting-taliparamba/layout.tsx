import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connecting Taliparamba | Career Counselling for Students",
  description: "Connecting Taliparamba is a career counselling initiative led by MLA M.V. Govindhan Master, helping first-year undergraduate students discover their strengths and find the right career path.",
  openGraph: {
    url: "/connecting-taliparamba",
    images: [{ url: "/connecting-taliparamba1.png", width: 1200, height: 630, alt: "Connecting Taliparamba Career Counselling" }],
  },
};

export default function ConnectingTaliparambaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
