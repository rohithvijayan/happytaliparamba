"use client";

import { useLanguageToggle } from "@/hooks/useLanguageToggle";

interface LogoProps {
    className?: string;
    isFooter?: boolean;
}

export default function Logo({ className = "", isFooter = false }: LogoProps) {
    const { isMalayalam, fade } = useLanguageToggle();

    return (
        <div className={`flex flex-col transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"} ${className}`}>
            {isMalayalam ? (
                <span className={`${isFooter ? "text-2xl md:text-3xl" : "text-xl"} font-malayalam font-extrabold tracking-normal text-white leading-none uppercase inline-block truncate max-w-full`}>
                    സന്തോഷം<span className="text-brand-gold">തളിപറമ്പ</span>
                </span>
            ) : (
                <span className={`${isFooter ? "text-2xl md:text-3xl" : "text-xl"} font-sans font-black tracking-tight text-white leading-none uppercase italic inline-block`}>
                    Santhosham<span className="text-brand-gold">Taliparamba</span>
                </span>
            )}
            {!isFooter && (
                <span className="text-[9px] text-brand-orange font-black uppercase tracking-[0.3em] mt-1">
                    People&apos;s Campaign
                </span>
            )}
        </div>
    );
}
