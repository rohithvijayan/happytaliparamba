import type { Metadata } from "next";
import Image from "next/image";
import tourismData from "@/data/TDMC.json";
import { sanitizeHtml } from "@/lib/sanitize";

export const metadata: Metadata = {
  title: "Tourism in Taliparamba | TDMC",
  description: "Explore the natural beauty of Taliparamba through the Taliparamba Destination Management Council (TDMC). Discover Kuppam River Park, Karimbam Eco Farm, and Mullakodi Floating.",
  openGraph: {
    url: "/tourism",
    images: [{ url: "/tourismHero.jpeg", width: 1200, height: 630, alt: "Taliparamba Tourism" }],
  },
};

export default function TourismPage() {
    const data = tourismData.tdmc_webpage;

    const getSection = (name: string) => data.find(s => s.section === name);

    const heroSection = getSection("Hero");
    const aboutSection = getSection("About");
    const newsSection = getSection("News");
    const destinationsSection = getSection("Destinations");
    const contactSection = getSection("Contact");

    return (
        <div className="min-h-screen font-sans text-stone-600 selection:bg-brand-gold/20 overflow-x-hidden relative" suppressHydrationWarning>
            {/* Page Background Texture */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-white">
                <div className="absolute inset-0 opacity-[0.4] mix-blend-multiply" style={{ backgroundImage: "url('/bgTexture.webp')", backgroundSize: '600px 600px', backgroundRepeat: 'repeat' }}></div>
            </div>

            <div className="relative z-10">
                {/* Hero Section */}
                <section className="relative h-[80vh] md:h-screen flex items-center justify-center overflow-hidden">
                    <Image
                        src="/tourismHero.jpeg"
                        alt="Taliparamba Tourism"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-[0px]"></div>

                    <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
                        <div className="flex flex-col items-center mb-8">
                            <div className="w-16 h-[2px] bg-brand-gold mb-6"></div>
                            <span className="text-brand-gold font-black uppercase tracking-[0.4em] text-[10px]">
                                Welcome to Taliparamba
                            </span>
                        </div>

                        <h1 className="font-malayalam font-extrabold text-3xl md:text-7xl text-white leading-tight mb-8 drop-shadow-2xl">
                            {heroSection?.elements.find(e => e.class === "hero-title")?.text}
                        </h1>

                        <p className="font-malayalam text-base md:text-2xl text-stone-200 max-w-3xl mx-auto leading-relaxed drop-shadow-lg opacity-90">
                            {heroSection?.elements.find(e => e.class === "hero-subtitle")?.text}
                        </p>
                    </div>
                </section>

                {/* Intro Description */}
                <section className="py-16 md:py-24 px-4 md:px-6 bg-white/40 backdrop-blur-sm border-b border-stone-200/50">
                    <div className="max-w-4xl mx-auto text-center italic">
                        <p className="font-malayalam text-lg md:text-2xl text-stone-500 leading-relaxed font-medium">
                            "{heroSection?.elements.find(e => e.class === "hero-description")?.text}"
                        </p>
                    </div>
                </section>

                {/* About TDMC */}
                <section className="py-20 md:py-32 px-4 md:px-6 bg-transparent">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                        <div className="relative aspect-square md:aspect-video rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl bg-white/80 backdrop-blur-sm p-8 md:p-12">
                            <Image
                                src="/tourism/TDMC-Logo.webp"
                                alt="TDMC Initiative"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div>
                            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-gold mb-4">Official Tourism Body</h2>
                            <h3 className="font-malayalam font-black text-2xl md:text-5xl text-stone-900 mb-6 md:mb-8 leading-tight">
                                {aboutSection?.elements.find(e => e.class === "section-title")?.text}
                            </h3>
                            <p className="font-malayalam text-base md:text-lg text-stone-600 leading-relaxed mb-8 md:mb-10">
                                {aboutSection?.elements.find(e => e.class === "section-body")?.text}
                            </p>
                            <div className="flex items-center gap-4 md:gap-6">
                                <div className="size-12 md:size-16 rounded-xl md:rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                                    <span className="material-symbols-outlined text-2xl md:text-3xl">nature_people</span>
                                </div>
                                <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-stone-400">Commitment to <br /> Responsible Tourism</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Destinations Grid */}
                <section className="py-20 md:py-32 px-4 md:px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12 md:mb-20">
                            <h2 className="font-malayalam font-black text-3xl md:text-6xl text-stone-900 mb-4">
                                {destinationsSection?.elements.find(e => e.tag === "h2")?.text}
                            </h2>
                            <div className="w-16 h-1 bg-brand-gold mx-auto"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {[
                                { img: "/tourism/kuppam_river_Park.webp", name: "കുപ്പം നദി പാർക്ക്", sub: "Nature's Serenity" },
                                { img: "/tourism/karimbam-farm.webp", name: "കരിമ്പം ഇക്കോ ഫാം", sub: "Agri-Tourism Hub" },
                                { img: "/tourism/mullakodi-floating.webp", name: "മുള്ളക്കൊടി ഫ്ലോട്ടിങ്", sub: "Unique Experience" }
                            ].map((dest, i) => (
                                <div key={i} className="group cursor-pointer">
                                    <div className="relative h-80 md:h-96 rounded-[2rem] overflow-hidden mb-6 shadow-lg transform group-hover:-translate-y-2 transition-transform duration-500">
                                        <Image src={dest.img} alt={dest.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                        <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                                            <p className="text-white font-malayalam font-bold text-xl md:text-2xl">{dest.name}</p>
                                            <p className="text-white/60 text-[10px] font-black uppercase tracking-widest mt-1">{dest.sub}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* News & Updates Section */}
                <section className="py-20 md:py-32 px-4 md:px-6 bg-brand-obsidian rounded-[2.5rem] md:rounded-[4rem] mx-4 md:mx-6 mb-20 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.05)_0%,transparent_50%)]"></div>
                    <div className="max-w-5xl mx-auto relative z-10">
                        <h2 className="font-malayalam font-black text-2xl md:text-5xl text-white mb-10 md:mb-16 text-center">
                            {newsSection?.elements.find(e => e.tag === "h2")?.text}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                            {newsSection?.elements.find(e => e.tag === "ul")?.items?.map((item: any, i: number) => (
                                <div key={i} className="flex gap-4 md:gap-6 p-5 md:p-8 bg-white/5 border border-white/5 rounded-[1.5rem] md:rounded-[2rem] hover:bg-white/10 transition-colors group">
                                    <div className="shrink-0 size-10 md:size-12 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined italic text-xl md:text-2xl">campaign</span>
                                    </div>
                                    <div className="font-malayalam text-base md:text-lg text-stone-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: sanitizeHtml(item.text) }}></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
