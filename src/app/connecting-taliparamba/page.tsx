"use client";

import Image from "next/image";
import connectingData from "@/data/connecting taliparamba.json";

export default function ConnectingTaliparambaPage() {
    return (
        <div className="min-h-screen font-sans text-stone-600 selection:bg-brand-gold/20 pb-20 overflow-x-hidden relative" suppressHydrationWarning>
            {/* Page Background Texture */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-white">
                <div className="absolute inset-0 opacity-[0.4] mix-blend-multiply" style={{ backgroundImage: "url('/bgTexture.webp')", backgroundSize: '600px 600px', backgroundRepeat: 'repeat' }}></div>
            </div>

            <div className="relative z-10">
                {/* Hero Header */}
                <section className="relative pt-24 pb-16 md:pt-48 md:pb-32 overflow-hidden px-4 md:px-6 bg-brand-obsidian">
                    <Image
                        src="/connectinTaliparamba.jpg"
                        alt="Connecting Taliparamba"
                        fill
                        className="object-cover opacity-30"
                        priority
                    />
                    <div className="absolute inset-0 bg-brand-obsidian/60 backdrop-blur-[2px]"></div>

                    <div className="max-w-5xl mx-auto text-center relative z-10">
                        <div className="flex flex-col items-center mb-10">
                            <div className="w-16 h-[2px] bg-gradient-to-r from-brand-orange to-brand-gold mb-6 md:mb-8"></div>
                            <h2 className="text-brand-gold font-black uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4 drop-shadow-md">
                                {connectingData.pageTitle.split(' - ')[0]}
                            </h2>
                        </div>

                        <h1 className="font-malayalam font-extrabold text-3xl md:text-8xl leading-tight mb-8 md:mb-10 md:leading-[1.1] drop-shadow-2xl text-white">
                            നിങ്ങളുടെ ഭാവിക്കായി ഒരു <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-gold to-brand-orange">
                                നേർവഴി
                            </span>
                        </h1>

                        <p className="font-malayalam text-lg md:text-2xl text-stone-200 max-w-3xl mx-auto leading-relaxed italic opacity-90 drop-shadow-lg p-2">
                            'കണക്റ്റിംഗ് തളിപ്പറമ്പ്' അവതരിപ്പിക്കുന്നു - ഒന്നാം വർഷ ബിരുദ വിദ്യാർത്ഥികൾക്ക് അവരുടെ അഭിരുചികൾ തിരിച്ചറിയാനും മികച്ച കരിയർ കണ്ടെത്താനുമുള്ള സുവർണ്ണാവസരം.
                        </p>
                    </div>
                </section>

                {/* Main Content Sections */}
                <div className="max-w-4xl mx-auto px-4 md:px-6 space-y-16 md:space-y-24 mt-12 md:mt-32">
                    {/* Intro Section */}
                    <div className="bg-white/80 backdrop-blur-sm border border-stone-200 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-16 relative overflow-hidden group hover:border-brand-gold/30 transition-all duration-700 shadow-xl shadow-black/5">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 blur-3xl rounded-full"></div>
                        <h2 className="font-malayalam font-black text-2xl md:text-4xl text-stone-900 mb-6 md:mb-8 flex items-center gap-3 md:gap-4">
                            <span className="size-2 rounded-full bg-brand-gold"></span>
                            എന്താണ് ഈ പദ്ധതി?
                        </h2>
                        <div className="space-y-6 font-malayalam text-base md:text-xl text-stone-600 leading-relaxed font-bold">
                            <p>
                                തളിപ്പറമ്പ് നിയോജകമണ്ഡലം എം.എൽ.എ ബഹു. <strong>എം.വി ഗോവിന്ദൻ മാസ്റ്ററുടെ</strong> നേതൃത്വത്തിലുള്ള <strong>'കണക്റ്റിംഗ് തളിപ്പറമ്പ്'</strong> സംരംഭത്തിന്റെ ഏറ്റവും പുതിയ കാൽവെപ്പാണ് ഈ കരിയർ കൗൺസിലിംഗ് പ്രോഗ്രാം.
                            </p>
                            <p>
                                ഓരോ വിദ്യാർത്ഥിയുടെയും അഭിരുചിയും കഴിവുകളും പ്രത്യേക കൗൺസിലിങ്ങിലൂടെ മനസ്സിലാക്കി അവർക്ക് കൃത്യമായ മാർഗനിർദേശം നൽകുക എന്നതാണ് ഈ പദ്ധതി ലക്ഷ്യമിടുന്നത്. ഉന്നത വിദ്യാഭ്യാസ രംഗത്ത് വിദ്യാർത്ഥികളെ അർത്ഥവത്തായ തിരഞ്ഞെടുപ്പുകളിലേക്ക് നയിക്കുന്നതിൽ ഒരു ദീർഘവീക്ഷണമുള്ള ചുവടുവയ്പ്പാണിത്.
                            </p>
                        </div>
                    </div>

                    {/* Education Policy */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center text-center md:text-left">
                        <div>
                            <h2 className="font-malayalam font-black text-2xl md:text-4xl text-stone-900 mb-6 md:mb-8">
                                പുതിയ വിദ്യാഭ്യാസ കാലവും <br />
                                <span className="text-brand-orange">തീരുമാനങ്ങളും</span>
                            </h2>
                            <div className="space-y-6 font-malayalam text-base md:text-lg text-stone-600 leading-relaxed font-bold">
                                <p>
                                    നാല് വർഷത്തെ ബിരുദ പ്രോഗസ്റ്റിന് (FYUGP) കീഴിൽ വിദ്യാർത്ഥികൾക്ക് അനവധി സാധ്യതകളാണുള്ളത്.
                                </p>
                                <p>
                                    നിങ്ങളുടെ 'മൈനർ സബ്ജക്ടുകൾ' തിരഞ്ഞെടുക്കുമ്പോൾ മികച്ച തൊഴിലിലേക്ക് നയിക്കുന്ന ശരിയായ തീരുമാനങ്ങൾ എടുക്കാൻ ഈ പ്രോഗ്രാം സഹായിക്കുന്നു.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm rounded-[2rem] md:rounded-[2.5rem] h-64 md:h-full min-h-[300px] border border-stone-200 relative overflow-hidden shadow-xl">
                            <Image src="/connecting-taliparamba1.png" alt="Education Policy" fill className="object-cover" />
                        </div>
                    </div>

                    {/* How it Works List */}
                    <div className="space-y-10 md:space-y-12">
                        <h2 className="font-malayalam font-black text-2xl md:text-4xl text-stone-900 text-center mb-8 md:mb-12">
                            പദ്ധതി എങ്ങനെയാണ് പ്രവർത്തിക്കുന്നത്?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { icon: 'biotech', title: 'ശാസ്ത്രീയമായ വിലയിരുത്തൽ', text: 'lifology.com തയ്യാറാക്കിയ സ്പത കരിയർ അസസ്‌മെന്റ് ടെസ്റ്റിനെ അടിസ്ഥാനമാക്കിയാണ് പദ്ധതി ആരംഭിക്കുന്നത്.' },
                                { icon: 'person_search', title: 'വ്യക്തിഗത ശ്രദ്ധ', text: 'അസസ്‌മെന്റ് റിസൾട്ടിന്റെ അടിസ്ഥാനത്തിൽ വിദ്യാർത്ഥികളിലെ അന്തർലീനമായ കഴിവുകൾ കണ്ടെത്തി വിദഗ്ദ്ധർ നേരിട്ട് മാർഗ്ഗനിർദ്ദേശങ്ങൾ നൽകുന്നു.' },
                                { icon: 'trending_up', title: 'വിടവുകൾ പരിഹരിക്കൽ', text: 'തിരു പുതിയ കാലത്തിന്റെ തൊഴിൽ ആവശ്യങ്ങൾക്ക് അനുസരിച്ച് നൈപുണ്യ വിടവുകൾ (Skill gaps) പരിഹരിക്കാൻ സഹായിക്കുന്നു.' }
                            ].map((item, i) => (
                                <div key={i} className="bg-white/80 backdrop-blur-sm border border-stone-200 rounded-[2rem] p-6 md:p-8 hover:bg-white transition-all group shadow-lg">
                                    <span className="material-symbols-outlined text-brand-gold text-3xl md:text-4xl mb-4 md:mb-6 group-hover:scale-110 transition-transform">{item.icon}</span>
                                    <h3 className="font-malayalam font-bold text-lg md:text-xl text-stone-900 mb-4">{item.title}</h3>
                                    <p className="font-malayalam text-sm text-stone-500 leading-relaxed">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Benefits Section */}
                    <div className="bg-gradient-to-r from-brand-orange via-brand-gold to-brand-orange p-[1px] rounded-[2.5rem] md:rounded-[3rem] shadow-2xl">
                        <div className="bg-white/95 backdrop-blur-xl rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-16">
                            <h2 className="font-malayalam font-black text-2xl md:text-5xl text-stone-900 text-center mb-10 md:mb-12">
                                എന്തിനാണ് ഈ പ്രോഗ്രാമിൽ പങ്കുചേരേണ്ടത്?
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 md:gap-y-10">
                                {[
                                    'നിങ്ങളുടെ ശക്തികൾ, ദൗർബല്യങ്ങൾ, പഠന ശൈലികൾ എന്നിവ തിരിച്ചറിയാം',
                                    'വിദഗ്ദ്ധ കൗൺസിലിംഗിലൂടെ ബോധ്യത്തോടെയുള്ള തീരുമാനങ്ങൾ എടുക്കാം',
                                    'തൊഴിൽ കമ്പോളത്തിൽ ഉയർന്ന ഡിമാൻഡ് ഉള്ളവരായി മാറാം',
                                    'ലക്ഷ്യബോധമുള്ളതും സംതൃപ്തവുമായ കരിയറിലേക്ക് വഴിതുറക്കാം'
                                ].map((benefit, i) => (
                                    <div key={i} className="flex gap-4 items-start">
                                        <span className="material-symbols-outlined text-brand-gold shrink-0">check_circle</span>
                                        <p className="font-malayalam font-bold text-stone-600 text-base md:text-lg">{benefit}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Quotes Section */}
                    <div className="pt-12 md:pt-20 text-center space-y-8 md:space-y-10">
                        <div className="max-w-3xl mx-auto italic relative px-4 md:px-10">
                            <span className="material-symbols-outlined absolute -top-6 -left-2 md:-top-10 md:-left-6 text-6xl md:text-8xl text-stone-200/50 select-none font-black italic">format_quote</span>
                            <h3 className="font-malayalam font-black text-xl md:text-3xl text-stone-900 mb-6 leading-tight">
                                നാളെയുടെ വഴികാട്ടികൾ!
                            </h3>
                            <p className="font-malayalam text-base md:text-xl text-stone-500 leading-relaxed">
                                സ്വന്തം കഴിവുകളെ തിരിച്ചറിഞ്ഞ് മുന്നേറുന്ന ഈ വിദ്യാർത്ഥികൾ, വരും വർഷങ്ങളിൽ തങ്ങളുടെ ജൂനിയേഴ്സ് ആയി വരുന്ന കുട്ടികൾക്ക് മാർഗ്ഗനിർദേശം കൊടുക്കാൻ കഴിയുന്ന ഒരു തലമുറയായി മാറും.
                            </p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm inline-block px-6 py-4 rounded-full border border-stone-200 shadow-sm mx-4">
                            <p className="font-malayalam font-bold text-[10px] md:text-xs text-brand-gold uppercase tracking-wider">
                                നിങ്ങളുടെ ഭാവി ശരിയായ കൈകളിലാണ്. നിങ്ങളുടെ സ്വപ്നങ്ങളിലേക്കുള്ള യാത്ര ഇന്ന് തന്നെ തുടങ്ങാം!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .font-malayalam strong {
                    color: #eab308; /* brand-gold approximate */
                    font-weight: 900;
                }
            `}</style>
        </div>
    );
}
