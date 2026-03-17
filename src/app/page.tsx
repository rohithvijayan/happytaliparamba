import Link from "next/link";

export default function HomePage() {
  return (
    <div className="font-sans bg-background-dark text-slate-200">
      <header className="fixed top-0 w-full z-50 bg-brand-navy/80 backdrop-blur-md border-b border-white/5">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-cyan rounded-xl flex items-center justify-center shadow-lg shadow-brand-cyan/20">
              <span className="material-symbols-outlined text-brand-navy text-2xl font-bold">
                sentiment_very_satisfied
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter text-white leading-none uppercase italic">
                Santhosham<span className="text-brand-cyan">Taliparamba</span>
              </span>
              <span className="text-[9px] text-brand-orange font-black uppercase tracking-[0.3em] mt-1">
                People&apos;s Campaign
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-10">
            <Link
              href="/"
              className="text-xs font-bold uppercase tracking-widest text-brand-cyan"
            >
              Home
            </Link>
            <Link
              href="/vikasanam"
              className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-brand-cyan transition-colors"
            >
              Vikasanam
            </Link>
            <Link
              href="#"
              className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-brand-cyan transition-colors"
            >
              Vision
            </Link>
            <Link
              href="#"
              className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-brand-cyan transition-colors"
            >
              Impact
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-brand-cyan hover:bg-white text-brand-navy px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-brand-cyan/20 active:scale-95">
              Support
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden hero-gradient">
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-[10px] font-black uppercase tracking-[0.4em] mb-10 animate-fade-in shadow-2xl">
              <span className="size-1.5 rounded-full bg-brand-cyan"></span>
              Welcome to the movement
            </div>
            <h1 className="text-5xl md:text-9xl font-black text-white mb-8 drop-shadow-2xl uppercase tracking-tighter leading-[0.8] italic">
              SANTHOSHAM <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-cyan">TALIPARAMBA</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-300 font-medium max-w-2xl mx-auto mb-16 leading-relaxed">
              Unity, Progress, and the Smile of our Community. <br />
              <span className="text-brand-yellow text-sm font-bold opacity-80 uppercase tracking-widest">A Decade of Dedicated Service</span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="glass p-10 rounded-[2.5rem] border-brand-cyan/10 hover:border-brand-cyan/30 transition-all cursor-default group hover:bg-brand-cyan/5">
                <span className="material-symbols-outlined text-brand-cyan text-5xl mb-6 group-hover:scale-110 transition-transform">
                  trending_up
                </span>
                <h3 className="font-malayalam text-2xl text-white mb-2 font-bold uppercase">
                  വികസനം
                </h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-brand-cyan/50 font-black">
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
              <div className="glass p-10 rounded-[2.5rem] border-brand-yellow/10 hover:border-brand-yellow/30 transition-all cursor-default group hover:bg-brand-yellow/5">
                <span className="material-symbols-outlined text-brand-yellow text-5xl mb-6 group-hover:scale-110 transition-transform">
                  handshake
                </span>
                <h3 className="font-malayalam text-2xl text-white mb-2 font-bold uppercase">
                  ഐക്യം
                </h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-brand-yellow/50 font-black">
                  Unity
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/vikasanam"
                className="bg-brand-cyan text-brand-navy px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-white transition-all shadow-2xl shadow-brand-cyan/20 active:scale-95"
              >
                <span className="material-symbols-outlined">analytics</span>
                Explore Projects
              </Link>
              <button className="bg-white/5 backdrop-blur-xl text-white border border-white/10 px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-white/10 transition-all active:scale-95">
                <span className="material-symbols-outlined">menu_book</span>
                Our Manifesto
              </button>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
            <span className="material-symbols-outlined text-brand-cyan text-4xl">
              expand_more
            </span>
          </div>
        </section>

        <section className="bg-brand-navy py-32 px-6">
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
                  <span className="text-brand-cyan">For Everyone</span>
                </h2>
                <p className="text-slate-400 text-xl font-medium leading-relaxed">
                  We are building a Thaliparamba that is prosperous, inclusive, and technologically advanced, while staying true to our cultural roots.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Feature cards updated with brand colors */}
              <div className="bg-white/5 border border-white/5 p-12 rounded-[3.5rem] hover:bg-brand-cyan/5 hover:border-brand-cyan/20 transition-all group">
                <div className="w-14 h-14 bg-brand-cyan/10 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-brand-cyan group-hover:text-brand-navy transition-all duration-500">
                  <span className="material-symbols-outlined text-brand-cyan group-hover:text-inherit text-3xl">
                    architecture
                  </span>
                </div>
                <h4 className="text-2xl font-black text-white mb-6 uppercase tracking-tight italic">
                  Progressive <br /> Infrastructure
                </h4>
                <p className="text-slate-400 text-sm font-medium leading-[1.8] mb-10">
                  Modern roads, bridges, and digital connectivity to drive our local economy forward.
                </p>
                <Link
                  href="/vikasanam"
                  className="text-brand-cyan font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-3 hover:gap-5 transition-all"
                >
                  View Maps <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
              </div>
              
              <div className="bg-white/5 border border-white/5 p-12 rounded-[3.5rem] hover:bg-brand-orange/5 hover:border-brand-orange/20 transition-all group">
                <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-brand-orange group-hover:text-brand-navy transition-all duration-500">
                  <span className="material-symbols-outlined text-brand-orange group-hover:text-inherit text-3xl">
                    school
                  </span>
                </div>
                <h4 className="text-2xl font-black text-white mb-6 uppercase tracking-tight italic">
                  Educational <br /> Renaissance
                </h4>
                <p className="text-slate-400 text-sm font-medium leading-[1.8] mb-10">
                  Upgrading schools and providing skills training for the youth of Taliparamba.
                </p>
                <a className="text-brand-orange font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-3 hover:gap-5 transition-all" href="#">
                  Learn more <span className="material-symbols-outlined text-base">arrow_forward</span>
                </a>
              </div>

              <div className="bg-white/5 border border-white/5 p-12 rounded-[3.5rem] hover:bg-brand-yellow/5 hover:border-brand-yellow/20 transition-all group">
                <div className="w-14 h-14 bg-brand-yellow/10 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-brand-yellow group-hover:text-brand-navy transition-all duration-500">
                  <span className="material-symbols-outlined text-brand-yellow group-hover:text-inherit text-3xl">
                    diversity_3
                  </span>
                </div>
                <h4 className="text-2xl font-black text-white mb-6 uppercase tracking-tight italic">
                  Secular <br /> Harmony
                </h4>
                <p className="text-slate-400 text-sm font-medium leading-[1.8] mb-10">
                  Maintaining the peaceful coexistence and unity that defines our great heritage.
                </p>
                <a className="text-brand-yellow font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-3 hover:gap-5 transition-all" href="#">
                  Community <span className="material-symbols-outlined text-base">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-brand-navy pt-32 pb-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center gap-12 text-center">
            <div className="flex items-center gap-4">
               <div className="size-14 bg-brand-cyan rounded-2xl flex items-center justify-center shadow-2xl shadow-brand-cyan/20">
                  <span className="material-symbols-outlined text-brand-navy text-3xl font-black">sentiment_very_satisfied</span>
               </div>
               <span className="text-3xl font-black tracking-tighter text-white uppercase italic">
                  Santhosham<span className="text-brand-cyan">Taliparamba</span>
               </span>
            </div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.4em] opacity-60">
              © 2024 thaliparamba unit. building smiles, delivering results.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
