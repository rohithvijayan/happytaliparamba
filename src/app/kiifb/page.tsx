"use client";

import { useState, useMemo } from "react";
import kiifbData from "@/data/kiifb_taliparamba_projects.json";

const getProjectStatus = (status: string) => {
    const s = status.toLowerCase();
    if (s.includes("completed")) {
        return { label: "Completed", color: "bg-emerald-50 text-emerald-700 border-emerald-200/50", progress: 100, barColor: "bg-emerald-500" };
    }
    if (s.includes("contract") || s.includes("process")) {
        return { label: "In Progress", color: "bg-amber-50 text-amber-700 border-amber-200/50", progress: 45, barColor: "bg-amber-500" };
    }
    if (s.includes("approved")) {
        return { label: "Approved", color: "bg-blue-50 text-blue-700 border-blue-200/50", progress: 25, barColor: "bg-blue-500" };
    }
    return { label: "Initiated", color: "bg-stone-100 text-stone-600 border-stone-200/50", progress: 10, barColor: "bg-stone-400" };
};

const formatToCr = (amount: number) => {
    return (amount / 10000000).toFixed(2);
};

export default function KiifbPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");

    const projects = kiifbData.projects;

    const filteredProjects = useMemo(() => {
        return projects.filter((project) => {
            const matchesSearch =
                project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.status.toLowerCase().includes(searchQuery.toLowerCase());

            if (statusFilter === "All") return matchesSearch;

            const currentStatus = getProjectStatus(project.status).label;
            return matchesSearch && currentStatus === statusFilter;
        });
    }, [searchQuery, statusFilter]);

    const categories = ["All", "Approved", "In Progress", "Initiated"];

    return (
        <div className="min-h-screen font-sans text-stone-600 selection:bg-brand-gold/20 pb-20 overflow-x-hidden relative" suppressHydrationWarning>
            {/* Page Background Texture */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-white">
                <div className="absolute inset-0 opacity-[0.4] mix-blend-multiply" style={{ backgroundImage: "url('/bgTexture.webp')", backgroundSize: '600px 600px', backgroundRepeat: 'repeat' }}></div>
            </div>

            <div className="relative z-10">
                {/* Hero Section */}
                <section className="relative w-full h-[50vh] md:h-[70vh] bg-stone-900 overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none scale-105">
                        <iframe
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-[177.77777778vh] h-[56.25vw]"
                            src="https://www.youtube.com/embed/R-RtnlIeJbk?autoplay=1&mute=1&loop=1&playlist=R-RtnlIeJbk&vq=hd1080&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&start=20"
                            title="KIIFB Hero Video"
                            sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>
                    </div>
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
                    <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10">
                        <h1 className="font-malayalam font-black text-3xl md:text-7xl text-white drop-shadow-2xl mb-4">
                            KIIFB <span className="text-brand-gold">@</span> തളിപ്പറമ്പ്
                        </h1>
                        <p className="text-white/80 text-[10px] md:text-lg font-black uppercase tracking-[0.5em] drop-shadow-lg">
                            Strategic Infrastructure Development
                        </p>
                    </div>
                </section>

                {/* Title Section (Universal Design) */}
                <section className="bg-brand-obsidian py-12 md:py-16 px-4 flex flex-col items-center justify-center text-center">
                    <h2 className="font-malayalam font-extrabold text-2xl md:text-5xl lg:text-7xl leading-tight mb-4 text-white">
                        തളിപ്പറമ്പ് വികസനകുതിപ്പ്: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-gold to-brand-orange">LDF</span> സർക്കാർ ഒപ്പം
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-brand-orange to-brand-gold rounded-full"></div>
                </section>

                {/* Main Dashboard */}
                <div className="max-w-7xl mx-auto px-4 md:px-10 mt-10 md:mt-20">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-10 md:mb-12">
                        <div className="flex-1 max-w-xl">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400 mb-4 md:mb-6">KIIFB Project Tracker</h3>
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

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 md:mb-12">
                        <div className="bg-white/80 backdrop-blur-sm p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] border border-stone-200 shadow-sm">
                            <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-stone-400 mb-1">Total KIIFB Projects</p>
                            <p className="text-xl md:text-2xl font-black text-stone-900 italic">{projects.length}</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] border border-stone-200 shadow-sm">
                            <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-brand-orange/60 mb-1">Total Estimated Cost</p>
                            <p className="text-xl md:text-2xl font-black text-stone-900 italic">
                                ₹{formatToCr(projects.reduce((acc, p) => acc + p.estimated_amount_inr, 0))} കോടി
                            </p>
                        </div>
                    </div>

                    {/* Project Table */}
                    <div className="bg-transparent">
                        {/* Desktop Header */}
                        <div className="hidden md:grid grid-cols-[1fr_200px_150px] gap-4 px-6 py-4 border-b border-stone-200 text-[10px] font-black uppercase tracking-widest text-stone-400">
                            <div>Project & Department</div>
                            <div>Current Status</div>
                            <div>Allocation</div>
                        </div>

                        {/* Rows */}
                        <div className="flex flex-col gap-4 md:gap-0">
                            {filteredProjects.length > 0 ? (
                                filteredProjects.map((project) => {
                                    const status = getProjectStatus(project.status);
                                    return (
                                        <div
                                            key={project.id}
                                            className="flex flex-col md:grid md:grid-cols-[1fr_200px_150px] gap-4 md:gap-4 px-4 md:px-6 py-6 md:py-10 border-b border-stone-100 items-start md:items-center group hover:bg-white/90 transition-all rounded-3xl md:rounded-none bg-white/40 md:bg-transparent"
                                        >
                                            <div className="w-full">
                                                <h4 className="font-malayalam font-extrabold text-sm md:text-base text-stone-900 group-hover:text-brand-orange transition-colors leading-relaxed">
                                                    {project.name}
                                                </h4>
                                                <p className="text-[9px] font-bold uppercase tracking-widest text-stone-400 mt-2 flex items-center gap-2">
                                                    <span className="size-1 rounded-full bg-brand-gold"></span> {project.department}
                                                </p>
                                            </div>

                                            <div className="flex items-center">
                                                <span className={`text-[8px] md:text-[9px] font-black px-3 py-1 rounded-full border shadow-sm ${status.color}`}>
                                                    {status.label}
                                                </span>
                                            </div>

                                            <div className="text-stone-900 font-sans font-black italic text-lg md:text-xl tracking-tight">
                                                ₹{formatToCr(project.estimated_amount_inr)} കോടി
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <div className="py-24 text-center">
                                    <span className="material-symbols-outlined text-stone-200 text-7xl mb-4">analytics</span>
                                    <p className="text-stone-400 font-bold">No projects found.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
