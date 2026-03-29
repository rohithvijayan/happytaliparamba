"use client";

import { useState, useEffect } from "react";

interface LazyYouTubeBackgroundProps {
  videoId: string;
  title: string;
  iframeClassName: string;
  allow: string;
  /** Additional URL params appended after the base embed params (e.g. "&start=20") */
  extraParams?: string;
  /** Milliseconds after mount before the iframe is inserted. Default: 1500 */
  delayMs?: number;
}

/**
 * Defers YouTube iframe injection until after the page is interactive.
 * This prevents YouTube's ~500 KB of JS + network requests from blocking
 * the critical rendering path on mobile.
 */
export default function LazyYouTubeBackground({
  videoId,
  title,
  iframeClassName,
  allow,
  extraParams = "",
  delayMs = 1500,
}: LazyYouTubeBackgroundProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), delayMs);
    return () => clearTimeout(timer);
  }, [delayMs]);

  if (!loaded) return null;

  // Reduce to hd720 (from hd1080) — background videos don't need 1080p
  const src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&vq=hd720&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1${extraParams}`;

  return (
    <iframe
      className={iframeClassName}
      src={src}
      title={title}
      allow={allow}
      sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
    />
  );
}
