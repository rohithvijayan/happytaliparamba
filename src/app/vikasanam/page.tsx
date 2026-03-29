"use client";

import { useState, useMemo, useEffect } from "react";
import projectsData from "@/data/projects.json";

const ITEMS_PER_PAGE = 20;

const getStatusColor = (status: string) => {
  const s = status.toLowerCase();
  if (s.includes("പൂർത്തീകരിച്ചു")) return "bg-emerald-50 text-emerald-700 border-emerald-200";
  if (s.includes("tender") || s.includes("process") || s.includes("progress")) return "bg-amber-50 text-amber-700 border-amber-200";
  if (s.includes("approved")) return "bg-blue-50 text-blue-700 border-blue-200";
  return "bg-stone-50 text-stone-600 border-stone-200";
};

interface Project {
  id: string;
  projectname: string;
  cost: number;
  status: string;
}

export default function VikasanamPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const projects = projectsData as Project[];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.projectname.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.status.toLowerCase().includes(searchQuery.toLowerCase());

      if (statusFilter === "All") return matchesSearch;
      if (statusFilter === "Completed") return matchesSearch && project.status.toLowerCase().includes("പൂർത്തീകരിച്ചു");
      if (statusFilter === "Ongoing") return matchesSearch && (project.status.toLowerCase().includes("tender") || project.status.toLowerCase().includes("process") || project.status.toLowerCase().includes("progress"));
      if (statusFilter === "Approved") return matchesSearch && project.status.toLowerCase().includes("approved");

      return matchesSearch;
    });
  }, [searchQuery, statusFilter, projects]);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, statusFilter]);

  const categories = ["All", "Completed", "Ongoing", "Approved"];

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
            <iframe
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-[177.77777778vh] h-[56.25vw]"
              src="https://www.youtube.com/embed/R-RtnlIeJbk?autoplay=1&mute=1&loop=1&playlist=R-RtnlIeJbk&vq=hd1080&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1"
              title="Vikasanam Hero Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] z-10"></div>

          <div className="relative z-20 max-w-5xl mx-auto text-center px-4 md:px-6">
            <div className="flex flex-col items-center mb-6 md:mb-8">
              <div className="w-16 h-[2px] bg-brand-gold mb-6 md:mb-8"></div>
              <span className="text-brand-gold font-black uppercase tracking-[0.4em] text-[10px]">
                Infrastructure & Development
              </span>
            </div>

            <h1 className="font-malayalam font-extrabold text-3xl md:text-6xl lg:text-8xl leading-tight mb-8 text-white">
              വികസന കാഴ്ചപ്പാട് <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-gold to-brand-orange">
                സമഗ്രം
              </span>
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-brand-orange to-brand-gold rounded-full mx-auto"></div>
          </div>
        </section>

        {/* Dashboard Area */}
        <div className="max-w-7xl mx-auto px-4 md:px-10 mt-12 md:mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16">
            <div className="flex-1 max-w-xl">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400 mb-6">Constituency Projects</h3>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 transition-colors group-focus-within:text-brand-gold">search</span>
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/80 backdrop-blur-sm border border-stone-200 rounded-2xl py-3 md:py-4 pl-12 pr-4 text-xs md:text-sm focus:outline-none focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/5 transition-all shadow-sm"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 md:gap-3 overflow-x-auto pb-4 md:pb-0 hide-scrollbar">
              {categories.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setStatusFilter(tab)}
                  className={`shrink-0 px-4 py-2 rounded-xl text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all border ${statusFilter === tab
                    ? "bg-stone-900 text-white border-stone-900 shadow-lg"
                    : "bg-white/80 backdrop-blur-sm text-stone-500 border-stone-200 hover:border-stone-300 shadow-sm"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {currentProjects.length > 0 ? (
              currentProjects.map((project) => (
                <div key={project.id} className="bg-white/80 backdrop-blur-sm p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-xl border border-stone-100 hover:-translate-y-2 transition-transform duration-500 group flex flex-col justify-between" suppressHydrationWarning>
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <span className={`text-[8px] md:text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full border shadow-sm ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                      <span className="material-symbols-outlined text-stone-200 group-hover:text-brand-gold transition-colors">analytics</span>
                    </div>
                    <h4 className="font-malayalam font-extrabold text-lg md:text-xl text-stone-900 mb-6 leading-tight group-hover:text-brand-orange transition-colors">
                      {project.projectname}
                    </h4>
                  </div>

                  <div className="pt-8 border-t border-stone-100 mt-auto">
                    <p className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-1">Estimated Cost</p>
                    <p className="font-sans font-black text-stone-900 text-lg italic">₹{project.cost} Cr</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-32 text-center">
                <span className="material-symbols-outlined text-stone-200 text-7xl mb-6">inventory_2</span>
                <p className="text-stone-400 font-bold tracking-widest uppercase text-sm">No results matching your criteria.</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-20 flex flex-wrap items-center justify-center gap-2 md:gap-4">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`size-10 md:size-12 rounded-xl text-xs font-black transition-all ${currentPage === i + 1
                    ? "bg-brand-gold text-brand-obsidian shadow-lg shadow-brand-gold/20"
                    : "bg-white/80 backdrop-blur-sm text-stone-400 hover:text-stone-600 border border-stone-200"
                    }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
