"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import festData from "@/data/happinesfest.json";
import LazyYouTubeBackground from "@/components/LazyYouTubeBackground";

const carouselImages = [
    "/happpinesfest/vert1.webp",
    "/happpinesfest/vert2.webp",
    "/happpinesfest/vert3.webp",
];

export default function HappinessFestPage() {
    const { header, body, footer } = festData.webpage_content;
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        // Correct the currentImage if it is out of bounds after changing images
        if (currentImage >= carouselImages.length) {
            setCurrentImage(0);
        }
    }, [carouselImages.length, currentImage]);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % (carouselImages.length || 1));
        }, 4000);
        return () => clearInterval(timer);
    }, [carouselImages.length]);

    // Helper to extract text from HTML tags for clean Hero presentation
    const stripTags = (html: string) => html.replace(/<[^>]*>/g, '');

    return (
        <div className="min-h-screen text-stone-700 selection:bg-brand-gold/20 pb-20 overflow-x-hidden font-sans relative" suppressHydrationWarning>
            {/* Page Background Texture & Ambient Gradients */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-white">
                <div className="absolute inset-0 opacity-[0.4] mix-blend-multiply" style={{ backgroundImage: "url('/bgTexture.webp')", backgroundSize: '600px 600px', backgroundRepeat: 'repeat' }}></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.05)_0%,transparent_100%)]"></div>

                {/* Ambient blobs — reduced blur & removed mix-blend-multiply to cut GPU repaint cost on mobile */}
                <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] bg-brand-orange/10 blur-[60px] rounded-full animate-pulse will-change-[opacity]" style={{ animationDuration: '8s' }}></div>
                <div className="absolute top-[40%] -right-[10%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] bg-brand-gold/10 blur-[60px] rounded-full animate-pulse will-change-[opacity]" style={{ animationDuration: '12s' }}></div>
            </div>

            <div className="relative z-10">
                {/* Hero Section */}
                <section className="relative w-full h-[60vh] md:h-[85vh] bg-black overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 pointer-events-none scale-105 opacity-60">
                        <LazyYouTubeBackground
                            videoId="m7CpZGbhCnQ"
                            title="Happiness Fest Hero Video"
                            iframeClassName="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-[177.77777778vh] h-[56.25vw]"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        />
                    </div>
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>

                    <div className="relative z-10 max-w-5xl mx-auto text-center px-4 md:px-6">
                        <div className="flex flex-col items-center mb-8">
                            <div className="w-16 h-[2px] bg-gradient-to-r from-brand-orange to-brand-gold mb-6 md:mb-8"></div>
                            <h2 className="text-brand-gold font-black uppercase tracking-[0.4em] text-[10px] drop-shadow-md">
                                Celebrate Together
                            </h2>
                        </div>

                        <h1 className="font-malayalam font-extrabold text-3xl md:text-7xl leading-tight mb-8 drop-shadow-2xl text-white">
                            {stripTags(header.main_title)}
                        </h1>

                        <p className="font-malayalam text-lg md:text-2xl text-stone-200 max-w-3xl mx-auto drop-shadow-xl italic opacity-90">
                            {stripTags(header.sub_title)}
                        </p>
                    </div>
                </section>

                {/* Introduction Section with Image */}
                <section className="relative max-w-7xl mx-auto px-4 md:px-6 mt-12 md:mt-24 z-20">
                    <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] md:rounded-[3rem] p-6 text-center md:text-left md:p-12 shadow-2xl shadow-black/5 border border-stone-200/50 flex flex-col lg:flex-row items-center gap-10 md:gap-12 group overflow-hidden relative">
                        {/* Decorative Blob */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 blur-3xl rounded-full -mr-20 -mt-20 pointer-events-none"></div>

                        {/* Highlight Image */}
                        <div className="relative w-full lg:w-1/2 h-[250px] md:h-[450px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-lg shrink-0 border border-stone-100">
                            <Image
                                src="/happpinesfest/640326842_18037371050772583_8221332421069935018_n.webp"
                                alt="Happiness Fest Opening"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                            />
                        </div>

                        {/* Introduction Content */}
                        <div className="relative lg:w-1/2 flex flex-col justify-center">
                            <div className="w-12 h-1 bg-brand-gold mb-6 md:mb-8 rounded-full mx-auto md:mx-0"></div>
                            <div
                                className="font-malayalam text-base md:text-xl text-stone-600 leading-loose space-y-6 [&>p>strong]:text-brand-orange [&>p>strong]:font-black"
                                dangerouslySetInnerHTML={{ __html: body.introduction }}
                            />
                        </div>
                    </div>
                </section>

                {/* Dynamic Width Gallery Section */}
                <section className="relative mt-12 md:mt-24 mx-auto max-w-7xl px-4 z-10 group flex justify-center">
                    <div className="relative rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-stone-200/50 bg-stone-900 flex justify-center items-center">
                        {carouselImages.map((src, idx) => (
                            <Image
                                key={idx}
                                src={src}
                                alt={`Happiness Fest Gallery ${idx + 1}`}
                                width={1600}
                                height={1200}
                                sizes="(max-width: 768px) 100vw, 80vw"
                                className={`max-h-[40vh] md:max-h-[75vh] w-auto object-contain transition-all duration-1000 ease-in-out ${currentImage === idx ? 'opacity-100 relative' : 'opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'}`}
                                priority={idx === 0}
                                loading={idx === 0 ? undefined : "lazy"}
                            />
                        ))}

                        {/* Gradient Overlay for Dots */}
                        <div className="absolute inset-x-0 bottom-0 h-24 md:h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-10">
                            {carouselImages.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentImage(idx)}
                                    className={`h-1.5 md:h-2 rounded-full shadow-md transition-all duration-300 ${currentImage === idx ? 'bg-brand-gold w-6 md:w-8' : 'bg-white/50 hover:bg-white w-1.5 md:w-2 hover:scale-110'}`}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Content Container */}
                <div className="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-24 relative z-20 space-y-16 md:space-y-24">
                    {/* Attractions Section */}
                    <div className="space-y-10 md:space-y-12">
                        <div className="text-center">
                            <div dangerouslySetInnerHTML={{ __html: body.attractions.section_title }} className="font-malayalam font-black text-2xl md:text-4xl text-stone-800 mb-4" />
                            <div className="w-12 h-1 bg-brand-gold mx-auto rounded-full"></div>
                        </div>

                        <div
                            className="font-malayalam grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 [&>ul]:contents"
                            dangerouslySetInnerHTML={{
                                __html: body.attractions.items_list.replace('<ul>', '').replace('</ul>', '').split('<li>').filter(s => s).map(item => `
                            <div class="bg-white/90 backdrop-blur-sm border border-stone-200 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] hover:shadow-xl hover:-translate-y-1 transition-all group relative overflow-hidden shadow-sm">
                                <span class="material-symbols-outlined absolute -right-4 -bottom-4 text-7xl md:text-9xl text-brand-gold/5 group-hover:text-brand-gold/10 transition-colors">celebration</span>
                                <div class="relative z-10 text-stone-600 text-base md:text-lg leading-relaxed">${item.replace('</li>', '')}</div>
                            </div>
                        `).join('')
                            }}
                        />
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .font-malayalam strong {
                    color: #ea580c; /* orange-600 */
                    font-weight: 900;
                }
            `}</style>
        </div>
    );
}
