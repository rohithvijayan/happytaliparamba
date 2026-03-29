"use client";

import { useState, useEffect } from "react";

export function useLanguageToggle(intervalMs = 5000, fadeDurationMs = 600) {
  const [isMalayalam, setIsMalayalam] = useState(false);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    let fadeTimer: ReturnType<typeof setTimeout>;

    const interval = setInterval(() => {
      setFade(false);
      fadeTimer = setTimeout(() => {
        setIsMalayalam((prev) => !prev);
        setFade(true);
      }, fadeDurationMs);
    }, intervalMs);

    return () => {
      clearInterval(interval);
      clearTimeout(fadeTimer);
    };
  }, [intervalMs, fadeDurationMs]);

  return { isMalayalam, fade };
}
