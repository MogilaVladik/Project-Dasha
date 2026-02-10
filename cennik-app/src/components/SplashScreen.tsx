"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const SplashScreen = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if user has seen onboarding
    const hasSeenOnboarding = localStorage.getItem("hasSeenOnboarding");

    const timer = setTimeout(() => {
      setLoading(false);
      if (!hasSeenOnboarding) {
        router.push("/onboarding");
      } else {
        router.push("/");
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [router]);

  if (!loading) return null;

  return (
    <div
      className="fixed inset-0 bg-navy sunburst flex items-center justify-center z-50"
      data-oid="hbbn1qb"
    >
      {/* Central logo */}
      <div className="text-center space-y-8 animate-fade-in" data-oid="ruajc95">
        {/* Ornamental frame */}
        <div className="relative inline-block" data-oid="gvub9ve">
          {/* Corner decorations */}
          <div
            className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-gold"
            data-oid="k8onikj"
          ></div>
          <div
            className="absolute -top-4 -right-4 w-8 h-8 border-r-2 border-t-2 border-gold"
            data-oid=":jaa4:f"
          ></div>
          <div
            className="absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2 border-gold"
            data-oid="v73x8mf"
          ></div>
          <div
            className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-gold"
            data-oid="8-z4ygb"
          ></div>

          {/* Main logo */}
          <div
            className="px-16 py-12 border-2 border-gold/40"
            data-oid="1qm5:92"
          >
            <h1
              className="font-display text-6xl font-bold tracking-luxury"
              data-oid="wnhbr-y"
            >
              <span className="gold-gradient-text" data-oid="03gexam">
                ЦЕННИК
              </span>
            </h1>
          </div>
        </div>

        {/* Subtitle */}
        <div className="space-y-2" data-oid="085fad0">
          <div
            className="h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"
            data-oid="8q7u.fn"
          ></div>
          <p
            className="font-serif text-ivory/80 text-lg tracking-wide"
            data-oid="et1xomv"
          >
            Ритейл Медиа
          </p>
          <div
            className="h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"
            data-oid=":lepo27"
          ></div>
        </div>

        {/* Loading indicator */}
        <div
          className="flex items-center justify-center gap-2 mt-12"
          data-oid="7jk20d2"
        >
          <div
            className="w-2 h-2 bg-gold rounded-full animate-pulse"
            style={{ animationDelay: "0ms" }}
            data-oid="y8bsf96"
          ></div>
          <div
            className="w-2 h-2 bg-gold rounded-full animate-pulse"
            style={{ animationDelay: "200ms" }}
            data-oid="sh05ccl"
          ></div>
          <div
            className="w-2 h-2 bg-gold rounded-full animate-pulse"
            style={{ animationDelay: "400ms" }}
            data-oid="o6ubhgw"
          ></div>
        </div>
      </div>

      {/* Decorative bottom ornament */}
      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        data-oid="f8w-h3t"
      >
        <svg
          width="60"
          height="30"
          viewBox="0 0 60 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-oid="fndhrbg"
        >
          <path
            d="M30 5 L35 15 L30 25 L25 15 Z"
            fill="url(#splashGold)"
            data-oid=".31yfjv"
          />

          <line
            x1="10"
            y1="15"
            x2="23"
            y2="15"
            stroke="url(#splashGold)"
            strokeWidth="1.5"
            data-oid="i9y.cw-"
          />

          <line
            x1="37"
            y1="15"
            x2="50"
            y2="15"
            stroke="url(#splashGold)"
            strokeWidth="1.5"
            data-oid="aw0yq00"
          />

          <defs data-oid="1:rzprf">
            <linearGradient
              id="splashGold"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
              data-oid="4vi4xqc"
            >
              <stop offset="0%" stopColor="#B8941F" data-oid="rwt66t5" />
              <stop offset="50%" stopColor="#D4AF37" data-oid="6xy:.ja" />
              <stop offset="100%" stopColor="#E8C870" data-oid="aehyuuz" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};
