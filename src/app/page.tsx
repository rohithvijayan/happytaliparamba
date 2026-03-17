import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="font-sans bg-brand-obsidian text-slate-200">
      <header className="fixed top-0 w-full z-50 bg-brand-obsidian/80 backdrop-blur-md border-b border-white/5">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image 
              src="/Thaliparamba_Unit__1__page-0001-removebg-preview.png"
              alt="Santhosham Taliparamba Logo"
              width={48}
              height={48}
              className="object-contain hover:scale-110 transition-transform duration-500"
            />
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter text-white leading-none uppercase italic">
                Santhosham<span className="text-brand-gold">Taliparamba</span>
              </span>
              <span className="text-[9px] text-brand-orange font-black uppercase tracking-[0.3em] mt-1">
                People&apos;s Campaign
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-10">
            <Link
              href="/"
              className="text-xs font-bold uppercase tracking-widest text-brand-gold"
            >
              Home
            </Link>
            <Link
              href="/vikasanam"
              className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-brand-gold transition-colors"
            >
              Vikasanam
            </Link>
            <Link
              href="#"
              className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-brand-gold transition-colors"
            >
              Vision
            </Link>
            <Link
              href="#"
              className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-brand-gold transition-colors"
            >
              Impact
            </Link>
          </div>
          <div className="flex md:hidden items-center gap-4">
            {/* Mobile menu placeholder */}
          </div>
        </nav>
      </header>

      <main>
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden hero-gradient">
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-9xl font-black text-white mt-7 mb-8 drop-shadow-2xl uppercase tracking-tighter leading-[0.8] italic">
              SANTHOSHAM <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-gold to-brand-orange">TALIPARAMBA</span>
            </h1>
            <p className="text-lg md:text-2xl text-stone-300 font-medium max-w-2xl mx-auto mb-16 leading-relaxed">
              Unity, Progress, and the Smile of our Community. <br />
              <span className="text-brand-gold text-sm font-bold opacity-80 uppercase tracking-widest">A Decade of Dedicated Service</span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="glass p-10 rounded-[2.5rem] border-brand-gold/10 hover:border-brand-gold/30 transition-all cursor-default group hover:bg-brand-gold/5">
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
              <div className="glass p-10 rounded-[2.5rem] border-brand-orange/10 hover:border-brand-orange/30 transition-all cursor-default group hover:bg-brand-orange/5">
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
              <div className="glass p-10 rounded-[2.5rem] border-brand-gold/10 hover:border-brand-gold/30 transition-all cursor-default group hover:bg-brand-gold/5">
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

        <section className="bg-brand-obsidian py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
              <div className="max-w-2xl text-left">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-[2px] bg-brand-orange"></div>
                  <span className="text-brand-orange font-black uppercase tracking-[0.4em] text-[10px]">
                    Our Promise
                  </span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] mb-8 uppercase tracking-tighter italic">
                  A Better Future <br />
                  <span className="text-brand-gold">For Everyone</span>
                </h2>
                <p className="text-stone-400 text-xl font-medium leading-relaxed">
                  We are building a Thaliparamba that is prosperous, inclusive, and technologically advanced, while staying true to our cultural roots.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-brand-charcoal border border-white/5 p-12 rounded-[3.5rem] hover:bg-brand-gold/5 hover:border-brand-gold/20 transition-all group shadow-2xl">
                <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-brand-gold group-hover:text-brand-obsidian transition-all duration-500">
                  <span className="material-symbols-outlined text-brand-gold group-hover:text-inherit text-3xl">
                    architecture
                  </span>
                </div>
                <h4 className="text-2xl font-black text-white mb-6 uppercase tracking-tight italic">
                  Progressive <br /> Infrastructure
                </h4>
                <p className="text-stone-400 text-sm font-medium leading-[1.8] mb-10">
                  Modern roads, bridges, and digital connectivity to drive our local economy forward.
                </p>
                <Link
                  href="/vikasanam"
                  className="text-brand-gold font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-3 hover:gap-5 transition-all"
                >
                  View Maps <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
              </div>
              
              <div className="bg-brand-charcoal border border-white/5 p-12 rounded-[3.5rem] hover:bg-brand-orange/5 hover:border-brand-orange/20 transition-all group shadow-2xl">
                <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-brand-orange group-hover:text-brand-obsidian transition-all duration-500">
                  <span className="material-symbols-outlined text-brand-orange group-hover:text-inherit text-3xl">
                    school
                  </span>
                </div>
                <h4 className="text-2xl font-black text-white mb-6 uppercase tracking-tight italic">
                  Educational <br /> Renaissance
                </h4>
                <p className="text-stone-400 text-sm font-medium leading-[1.8] mb-10">
                  Upgrading schools and providing skills training for the youth of Taliparamba.
                </p>
                <a className="text-brand-orange font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-3 hover:gap-5 transition-all" href="#">
                  Learn more <span className="material-symbols-outlined text-base">arrow_forward</span>
                </a>
              </div>

              <div className="bg-brand-charcoal border border-white/5 p-12 rounded-[3.5rem] hover:bg-brand-gold/5 hover:border-brand-gold/20 transition-all group shadow-2xl">
                <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-brand-gold group-hover:text-brand-obsidian transition-all duration-500">
                  <span className="material-symbols-outlined text-brand-gold group-hover:text-inherit text-3xl">
                    diversity_3
                  </span>
                </div>
                <h4 className="text-2xl font-black text-white mb-6 uppercase tracking-tight italic">
                  Secular <br /> Harmony
                </h4>
                <p className="text-stone-400 text-sm font-medium leading-[1.8] mb-10">
                  Maintaining the peaceful coexistence and unity that defines our great heritage.
                </p>
                <a className="text-brand-gold font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-3 hover:gap-5 transition-all" href="#">
                  Community <span className="material-symbols-outlined text-base">arrow_forward</span>
                </a>
              </div>
            </div>
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
                 className="object-contain hover:scale-110 transition-transform duration-500"
               />
               <span className="text-3xl font-black tracking-tighter text-white uppercase italic">
                  Santhosham<span className="text-brand-gold">Taliparamba</span>
               </span>
            </div>
            <p className="text-stone-500 text-xs font-bold uppercase tracking-[0.4em] opacity-60">
              © 2024 thaliparamba unit. building smiles, delivering results.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
