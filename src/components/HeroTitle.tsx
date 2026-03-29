"use client";

import { useLanguageToggle } from "@/hooks/useLanguageToggle";

export default function HeroTitle() {
    const { isMalayalam, fade } = useLanguageToggle();

    return (
        <h1
            className={`text-3xl sm:text-4xl md:text-9xl font-black text-white mt-7 mb-8 drop-shadow-2xl uppercase tracking-tight leading-[1] md:leading-[0.8] transition-opacity duration-500 overflow-visible ${fade ? "opacity-100" : "opacity-0"}`}
        >
            {isMalayalam ? (
                <span className="font-malayalam font-extrabold tracking-normal px-4 pb-2 inline-block">
                    സന്തോഷം <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-gold to-brand-orange leading-[1.1] py-2 inline-block">
                        തളിപറമ്പ
                    </span>
                </span>
            ) : (
                <span className="px-4 italic inline-block">
                    SANTHOSHAM <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-gold to-brand-orange">
                        TALIPARAMBA
                    </span>
                </span>
            )}
        </h1>
    );
}
