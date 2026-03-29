import React from "react";
import zooData from "@/data/zoo.json";
import LazyYouTubeBackground from "@/components/LazyYouTubeBackground";

export default function ZooPage() {
    const data = zooData.zoo_project;

    return (
        <div className="min-h-screen font-sans text-stone-600 selection:bg-brand-gold/20 pb-20 overflow-x-hidden relative" suppressHydrationWarning>
            {/* Page Background Texture */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-white">
                <div className="absolute inset-0 opacity-[0.4] mix-blend-multiply" style={{ backgroundImage: "url('/bgTexture.webp')", backgroundSize: '600px 600px', backgroundRepeat: 'repeat' }}></div>
            </div>

            <div className="relative z-10">
                {/* Hero Section */}
                <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-brand-obsidian">
                    {/* Background Video */}
                    <div className="absolute inset-0 pointer-events-none scale-105 z-0">
                        <LazyYouTubeBackground
                            videoId="VBVITZHjVFc"
                            title="Zoo & Safari Park Hero Video"
                            iframeClassName="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-[177.77777778vh] h-[56.25vw]"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        />
                    </div>
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-10"></div>

                    <div className="relative z-20 max-w-5xl mx-auto text-center px-4 md:px-6">
                        <div className="flex flex-col items-center mb-6 md:mb-8">
                            <div className="w-16 h-[2px] bg-brand-gold mb-6 md:mb-8"></div>
                            <span className="text-brand-gold font-black uppercase tracking-[0.4em] text-[10px]">
                                Upcoming Eco Tourism Destination
                            </span>
                        </div>

                        <div
                            className="font-malayalam font-extrabold text-3xl md:text-7xl text-white leading-tight mb-8 drop-shadow-2xl [&>h2]:m-0"
                            dangerouslySetInnerHTML={{ __html: data.title }}
                        />
                    </div>
                </section>

                {/* Overview */}
                <section className="py-16 md:py-24 px-4 md:px-6 bg-white/40 backdrop-blur-sm relative border-b border-stone-200/50">
                    <div className="max-w-5xl mx-auto text-center italic">
                        <div
                            className="font-malayalam text-lg md:text-2xl text-stone-500 leading-relaxed font-medium [&>p>strong]:text-brand-gold [&>p>strong]:font-black"
                            dangerouslySetInnerHTML={{ __html: data.overview }}
                        />
                    </div>
                </section>

                {/* Details Grid */}
                <section className="py-20 md:py-32 px-4 md:px-6 bg-transparent relative">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12 md:mb-20">
                            <h2 className="font-sans font-black text-2xl md:text-5xl text-stone-900 mb-4 uppercase tracking-widest leading-tight">
                                Zoo & Safari Park <br /> <span className="text-brand-gold italic">Key Insights</span>
                            </h2>
                            <div className="w-16 h-1 bg-brand-gold mx-auto"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {data.key_details.map((item: any, index: number) => {
                                // Determine appropriate icons based on content topic context
                                const icons = ["landscape", "update", "map", "attractions", "pets", "work"];
                                const icon = icons[index % icons.length];

                                return (
                                    <div key={index} className="bg-white/80 backdrop-blur-sm p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-xl border border-stone-100 hover:-translate-y-2 transition-transform duration-500 group flex flex-col">
                                        <div className="size-12 md:size-16 bg-brand-gold/10 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-obsidian transition-colors shrink-0">
                                            <span className="material-symbols-outlined text-2xl md:text-3xl">{icon}</span>
                                        </div>
                                        <div>
                                            <div
                                                className="font-malayalam font-black text-xl md:text-2xl text-stone-900 mb-4 [&>h3]:m-0 leading-tight"
                                                dangerouslySetInnerHTML={{ __html: item.topic }}
                                            />
                                            <div
                                                className="font-malayalam text-base md:text-lg text-stone-600 leading-relaxed [&>p>strong]:text-brand-orange [&>p>strong]:font-black"
                                                dangerouslySetInnerHTML={{ __html: item.details }}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Footer CTA */}
                <section className="py-20 md:py-32 px-4 md:px-6 bg-brand-obsidian relative overflow-hidden mt-12 mx-4 md:mx-6 rounded-[2.5rem] md:rounded-[4rem] mb-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.05)_0%,transparent_50%)]"></div>
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <span className="material-symbols-outlined text-brand-gold text-4xl md:text-5xl mb-6">forest</span>
                        <h2 className="font-malayalam font-black text-2xl md:text-5xl text-white leading-tight mb-8">
                            തളിപ്പറമ്പിന്റെ വികസന ചരിത്രത്തിൽ <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-gold">
                                പുതിയൊരു നാഴികക്കല്ല് കൂടി
                            </span>
                        </h2>
                        <p className="text-stone-400 font-medium uppercase tracking-widest text-[10px] md:text-xs">
                            Committed to Sustainable Growth and Ecotourism
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}
