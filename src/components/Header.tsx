"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/Logo";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Close menu when pathname changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    // Safety reset for body overflow (in case it was locked by a previous version)
    useEffect(() => {
        document.body.style.overflow = "unset";
    }, []);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/vikasanam", label: "Vikasanam" },
        { href: "/connecting-taliparamba", label: "Connecting Taliparamba" },
        { href: "/tourism", label: "Tourism" },
        { href: "/kiifb", label: "KIIFB Projects" },
        { href: "/happiness-fest", label: "Happiness Fest" },
        { href: "/zoo", label: "Zoo & Safari" },
    ];

    return (
        <header className="fixed top-0 w-full z-[60] bg-brand-obsidian/90 backdrop-blur-xl border-b border-white/5 transition-all duration-300" suppressHydrationWarning>
            <nav className="w-full max-w-[100rem] mx-auto px-4 md:px-8 h-20 flex items-center justify-between relative" suppressHydrationWarning>
                <div className="flex items-center gap-3 shrink-0">
                    <Image
                        src="/Thaliparamba_Unit__1__page-0001-removebg-preview.png"
                        alt="Santhosham Taliparamba Logo"
                        width={40}
                        height={40}
                        className="object-contain hover:scale-110 transition-transform duration-500"
                    />
                    <Logo />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden xl:flex items-center gap-4 2xl:gap-8 shrink-0">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-[9px] xl:text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all hover:scale-105 ${pathname === link.href ? "text-brand-gold" : "text-stone-400 hover:text-brand-gold"}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex xl:hidden items-center">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-stone-400 hover:text-brand-gold p-2 transition-colors"
                        aria-label="Toggle Menu"
                    >
                        <span className="material-symbols-outlined text-3xl">
                            {isMenuOpen ? "close" : "menu"}
                        </span>
                    </button>
                </div>

                <div
                    className={`absolute top-20 left-0 w-full bg-brand-obsidian/95 backdrop-blur-2xl border-b border-white/5 overflow-hidden transition-all duration-300 ease-in-out xl:hidden ${isMenuOpen ? "max-h-[90vh] opacity-100 py-6" : "max-h-0 opacity-0 py-0"
                        }`}
                >
                    <div className="flex flex-col px-6 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`py-4 px-4 rounded-xl text-xs font-black uppercase tracking-[0.2em] transition-all flex items-center justify-between group ${pathname === link.href
                                    ? "bg-brand-gold/10 text-brand-gold"
                                    : "text-stone-400 hover:bg-white/5 hover:text-stone-200"
                                    }`}
                            >
                                <span>{link.label}</span>
                                <span className={`material-symbols-outlined text-sm transition-transform duration-300 ${pathname === link.href ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}`}>
                                    arrow_forward_ios
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
}
