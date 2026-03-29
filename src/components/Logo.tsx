"use client";

import { useState, useEffect } from "react";

interface LogoProps {
    className?: string;
    isFooter?: boolean;
}

export default function Logo({ className = "", isFooter = false }: LogoProps) {
    const [isMalayalam, setIsMalayalam] = useState(false);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); // Start fade out
            setTimeout(() => {
                setIsMalayalam((prev) => !prev);
                setFade(true); // Start fade in
            }, 600); // Wait for fade out duration
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`flex flex-col transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"} ${className}`} suppressHydrationWarning>
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
