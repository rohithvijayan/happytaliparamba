import Link from "next/link";
import projects from "@/data/projects.json";

export default function VikasanamPage() {
  return (
    <div className="bg-brand-navy min-h-screen relative overflow-x-hidden selection:bg-brand-cyan/30 font-sans text-slate-200">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-cyan/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-orange/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 flex h-auto min-h-screen w-full flex-col">
        {/* Navigation */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-white/5 px-6 md:px-12 py-5 backdrop-blur-xl sticky top-0 z-50 bg-brand-navy/60">
          <div className="flex items-center gap-4">
            <div className="size-10 flex items-center justify-center bg-brand-cyan/10 rounded-xl border border-brand-cyan/20">
              <span className="material-symbols-outlined text-brand-cyan text-xl font-light">
                account_balance
              </span>
            </div>
            <div>
              <h2 className="text-white text-sm font-black tracking-tight leading-none uppercase italic">
                Development <span className="text-brand-cyan ml-1">Archive</span>
              </h2>
            </div>
          </div>
          
          <div className="flex items-center gap-8">
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                href="/"
                className="text-slate-400 hover:text-brand-cyan transition-all text-[10px] font-black uppercase tracking-widest"
              >
                Home
              </Link>
              <Link
                href="/vikasanam"
                className="text-brand-cyan text-[10px] font-black uppercase tracking-widest border-b-2 border-brand-cyan pb-1"
              >
                Projects
              </Link>
            </nav>
            <Link
              href="/"
              className="flex items-center justify-center rounded-full h-9 px-6 bg-brand-cyan text-brand-navy text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-lg shadow-brand-cyan/10"
            >
              Back Home
            </Link>
          </div>
        </header>

        <main className="flex-1 max-w-full mx-auto w-full px-4 md:px-10 py-16">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16 px-2">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/5 border border-brand-cyan/10 text-brand-cyan text-[9px] font-black uppercase tracking-[0.2em] mb-6">
                <span className="size-1.5 rounded-full bg-brand-cyan animate-pulse"></span>
                Constituency Progress Report
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic leading-[0.9] tracking-tighter">
                Decade of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-cyan">Development</span>
              </h1>
            </div>
            <div className="flex items-center gap-6 pb-2">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white leading-none tracking-tighter italic">{projects.length}</span>
                <span className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mt-1">Total Projects</span>
              </div>
              <div className="w-[1px] h-10 bg-white/10"></div>
              <div className="flex flex-col">
                  <span className="text-brand-cyan font-black italic uppercase text-xs tracking-widest">Live Updates</span>
                  <p className="text-[10px] text-slate-500 font-medium">Taliparamba Unit</p>
              </div>
            </div>
          </div>

          {/* High-Density Project Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/5 p-5 rounded-3xl transition-all duration-300 hover:bg-white/[0.08] hover:border-brand-cyan/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2">
                      <div className={`size-2 rounded-full shadow-[0_0_8px] ${
                        project.status.includes("പൂർത്ത") 
                          ? "bg-brand-cyan shadow-brand-cyan/50" 
                          : "bg-brand-orange shadow-brand-orange/50"
                      }`}></div>
                      <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 group-hover:text-slate-300 transition-colors">
                        {project.status.includes("പൂർത്ത") ? "Completed" : "Ongoing"}
                      </span>
                    </div>
                    <div className="bg-brand-navy/50 border border-white/5 px-2 py-0.5 rounded-lg">
                      <span className="text-[10px] font-black text-brand-cyan italic">₹{project.cost} <span className="text-[8px] font-medium not-italic ml-0.5 opacity-60">Cr</span></span>
                    </div>
                  </div>
                  
                  <h3 className="font-malayalam text-base font-bold leading-snug text-white group-hover:text-brand-cyan transition-colors mb-4 line-clamp-3">
                    {project.projectname}
                  </h3>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between opacity-40 group-hover:opacity-100 transition-opacity">
                   <div className="flex items-center gap-1.5 text-slate-500">
                      <span className="material-symbols-outlined text-xs">location_on</span>
                      <span className="text-[8px] font-bold uppercase tracking-widest">Regional Unit</span>
                   </div>
                   <span className="material-symbols-outlined text-xs text-brand-cyan scale-75">arrow_forward_ios</span>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/5 mt-20 bg-brand-navy py-12 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
                <div className="size-10 bg-brand-cyan rounded-xl flex items-center justify-center shadow-lg shadow-brand-cyan/10">
                  <span className="material-symbols-outlined text-brand-navy text-xl font-black">sentiment_very_satisfied</span>
                </div>
                <span className="text-xl font-black tracking-tighter text-white uppercase italic">
                  Santhosham<span className="text-brand-cyan">Taliparamba</span>
                </span>
            </div>
            <p className="text-slate-600 text-[9px] font-black uppercase tracking-[0.3em]">
              © 2024 thaliparamba unit • building our future
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
