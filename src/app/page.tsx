import Image from "next/image";
import Logo from "@/components/Logo";
import HeroTitle from "@/components/HeroTitle";
import LazyYouTubeBackground from "@/components/LazyYouTubeBackground";

export default function HomePage() {
  return (
    <div className="font-sans bg-brand-obsidian text-slate-200">
      <main>
        {/* Hero — Next/Image replaces CSS background-image (no render-blocking fetch, optimized format/size) */}
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden px-4">
          {/* Mobile hero image */}
          <Image
            src="/heromobile.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center lg:hidden"
            quality={80}
          />
          {/* Desktop hero image */}
          <Image
            src="/heroDesktop (2).webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center hidden lg:block"
            quality={80}
          />
          {/* Overlay matching original hero-gradient darkness */}
          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-10 max-w-5xl mx-auto text-center overflow-hidden">
            <HeroTitle />
            <p className="font-malayalam text-lg md:text-2xl text-stone-300 font-medium max-w-2xl mx-auto mb-16 leading-relaxed">
              വികസനത്തിന്റെ നല്ലകാലം  <br />
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="glass p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border-brand-gold/10 hover:border-brand-gold/30 transition-all cursor-default group hover:bg-brand-gold/5">
                <span className="material-symbols-outlined text-brand-gold text-5xl mb-6 group-hover:scale-110 transition-transform">
                  trending_up
                </span>
                <h3 className="font-malayalam text-2xl text-white mb-2 font-bold uppercase">
                  വികസനം
                </h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-brand-gold/50 font-black">
                  Development
                </p>
              </div>
              <div className="glass p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border-brand-orange/10 hover:border-brand-orange/30 transition-all cursor-default group hover:bg-brand-orange/5">
                <span className="material-symbols-outlined text-brand-orange text-5xl mb-6 group-hover:scale-110 transition-transform">
                  groups
                </span>
                <h3 className="font-malayalam text-2xl text-white mb-2 font-bold uppercase">
                  ക്ഷേമം
                </h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-brand-orange/50 font-black">
                  Welfare
                </p>
              </div>
              <div className="glass p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border-brand-gold/10 hover:border-brand-gold/30 transition-all cursor-default group hover:bg-brand-gold/5">
                <span className="material-symbols-outlined text-brand-gold text-5xl mb-6 group-hover:scale-110 transition-transform">
                  handshake
                </span>
                <h3 className="font-malayalam text-2xl text-white mb-2 font-bold uppercase">
                  ഐക്യം
                </h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-brand-gold/50 font-black">
                  Unity
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
            <span className="material-symbols-outlined text-brand-gold text-4xl">
              expand_more
            </span>
          </div>
        </section>

        <section className="bg-brand-obsidian py-16 md:py-24 px-4 flex flex-col items-center justify-center text-center">
          <h2 className="font-malayalam font-extrabold text-2xl sm:text-4xl md:text-6xl lg:text-8xl leading-none md:leading-tight mb-6 flex flex-wrap items-center justify-center">
            <span className="text-white">മറ്റാരുണ്ട്</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-gold to-brand-orange mx-4 md:mx-10 my-2 md:my-0">
              LDF
            </span>
            <span className="text-white">അല്ലാതെ</span>
          </h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-brand-orange to-brand-gold rounded-full"></div>
        </section>

        <section className="relative h-[60vh] md:h-[90vh] overflow-hidden bg-black flex items-center justify-center">
          {/* Lazy-loaded background video — deferred 1.5s after mount so it never blocks FCP */}
          <div className="absolute inset-0 pointer-events-none opacity-50 overflow-hidden">
            <LazyYouTubeBackground
              videoId="4UY3A_QVVdA"
              title="Santhosham Taliparamba Video"
              iframeClassName="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[105%] min-h-[105%] w-[177.77777778vh] h-[56.25vw] sm:w-full sm:h-full sm:object-cover"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
          </div>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <div className="flex flex-col items-center mb-8">
              <div className="w-16 h-[2px] bg-brand-orange mb-6"></div>
              <span className="text-brand-orange font-black uppercase tracking-[0.4em] text-[10px]">
                Our Promise
              </span>
            </div>

            <h2 className="font-malayalam text-2xl sm:text-4xl md:text-8xl font-black text-white leading-tight md:leading-[0.9] mb-10 uppercase tracking-tighter break-words drop-shadow-2xl">
              വികസനം <br />
              <span className="text-brand-gold">ക്ഷേമം</span> <br />
              <span className="text-brand-white">മതനിരപേക്ഷത</span>
            </h2>

            <p className="font-malayalam text-base sm:text-lg md:text-2xl text-stone-200 font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-xl px-4">
              സാംസ്കാരിക വേരുകൾ മറക്കാതെ, സമൃദ്ധിയും സാങ്കേതിക തികവുമുള്ള, എല്ലാവർക്കും തുല്യ ഇടമുള്ള ഒരു തളിപ്പറമ്പ് നാം പടുത്തുയർത്തുകയാണ്
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-brand-obsidian pt-32 pb-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center gap-12 text-center">
            <div className="flex items-center gap-4">
              <Image
                src="/Thaliparamba_Unit__1__page-0001-removebg-preview.png"
                alt="Santhosham Taliparamba Logo"
                width={64}
                height={64}
                loading="lazy"
                className="object-contain hover:scale-110 transition-transform duration-500"
              />
              <Logo isFooter />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
