"use client";

import React, { useEffect, useState, useCallback, memo } from "react";
import { useRouter } from "next/navigation";

const SPLASH_DURATION = 2500;

export const SplashScreen = memo(function SplashScreen() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const finishSplash = useCallback(() => {
    setLoading(false);
    const hasSeenOnboarding =
      typeof window !== "undefined" && localStorage.getItem("hasSeenOnboarding");
    if (!hasSeenOnboarding) {
      router.push("/onboarding");
    } else {
      router.push("/");
    }
  }, [router]);

  useEffect(() => {
    const timer = setTimeout(finishSplash, SPLASH_DURATION);
    return () => clearTimeout(timer);
  }, [finishSplash]);

  if (!loading) return null;

  return (
    <div
      className="fixed inset-0 bg-navy sunburst flex items-center justify-center z-50"
      data-oid="hbbn1qb"
    >
      <div className="text-center space-y-8 animate-fade-in">
        <div className="relative inline-block">
          <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-gold" />
          <div className="absolute -top-4 -right-4 w-8 h-8 border-r-2 border-t-2 border-gold" />
          <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2 border-gold" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-gold" />
          <div className="px-16 py-12 border-2 border-gold/40">
            <h1 className="font-display text-6xl font-bold tracking-luxury">
              <span className="gold-gradient-text">ЦЕННИК</span>
            </h1>
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
          <p className="font-serif text-ivory/80 text-lg tracking-wide">
            Ритейл Медиа
          </p>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </div>
        <div className="flex items-center justify-center gap-2 mt-12">
          <div className="w-2 h-2 bg-gold rounded-full animate-pulse splash-dot-delay-0" />
          <div className="w-2 h-2 bg-gold rounded-full animate-pulse splash-dot-delay-200" />
          <div className="w-2 h-2 bg-gold rounded-full animate-pulse splash-dot-delay-400" />
        </div>
      </div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2" aria-hidden>
        <svg
          width="60"
          height="30"
          viewBox="0 0 60 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="splashGold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#B8941F" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#E8C870" />
            </linearGradient>
          </defs>
          <path d="M30 5 L35 15 L30 25 L25 15 Z" fill="url(#splashGold)" />
          <line
            x1="10"
            y1="15"
            x2="23"
            y2="15"
            stroke="url(#splashGold)"
            strokeWidth="1.5"
          />
          <line
            x1="37"
            y1="15"
            x2="50"
            y2="15"
            stroke="url(#splashGold)"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </div>
  );
});
