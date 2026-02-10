"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArtDecoOrnament,
  GeometricDivider,
} from "@/components/ArtDecoOrnament";

const onboardingData = [
  {
    title: "ЦЕННИК",
    subtitle: "Ежеквартальное издание о ритейле",
    description:
      "Эксклюзивная медиа-платформа для поставщиков и вендоров розничной индустрии. Глубокая аналитика, экспертные мнения и тренды рынка.",
  },
  {
    title: "ПРЕМИУМ КОНТЕНТ",
    subtitle: "Статьи · Подкасты · Интервью",
    description:
      "Авторские материалы от ведущих экспертов индустрии. Каждый выпуск — тщательно отобранные статьи о трендах, стратегиях и инновациях в ритейле.",
  },
  {
    title: "НАЧНИТЕ ЧТЕНИЕ",
    subtitle: "Доступ к архиву изданий",
    description:
      "Погрузитесь в мир премиального ритейл-медиа. Архив всех выпусков, подкасты с лидерами отрасли и эксклюзивные материалы уже доступны.",
  },
];

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();

  const handleNext = () => {
    if (currentStep < onboardingData.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      if (typeof window !== "undefined") {
        localStorage.setItem("hasSeenOnboarding", "true");
      }
      router.push("/");
    }
  };

  const handleSkip = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("hasSeenOnboarding", "true");
    }
    router.push("/");
  };

  const currentData = onboardingData[currentStep];

  return (
    <div
      className="min-h-screen bg-ivory sunburst flex flex-col"
      data-oid="8_c5929"
    >
      {/* Skip button */}
      <div className="absolute top-6 right-6 z-10" data-oid="dh1pkpy">
        <button
          onClick={handleSkip}
          className="font-serif text-navy/60 hover:text-gold transition-colors tracking-wide"
          data-oid="y89em0."
        >
          Пропустить
        </button>
      </div>

      {/* Main content */}
      <div
        className="flex-1 flex flex-col items-center justify-center px-6 pb-32"
        data-oid="h062_:m"
      >
        {/* Ornamental header */}
        <div className="mb-8" data-oid="3ojo1bg">
          <ArtDecoOrnament data-oid="2e8z.66" />
        </div>

        {/* Step indicator ornament */}
        <div className="flex gap-3 mb-12" data-oid="yvl5zaq">
          {onboardingData.map((_, index) => (
            <div
              key={index}
              className={`transition-all duration-300 ${
                index === currentStep
                  ? "w-12 h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light"
                  : "w-8 h-1 bg-navy/20"
              }`}
              data-oid="kixdced"
            />
          ))}
        </div>

        {/* Content */}
        <div className="max-w-md text-center space-y-6" data-oid="593suj_">
          <h1
            className="font-display text-5xl font-bold tracking-art-deco text-navy"
            data-oid="1attx.7"
          >
            {currentData.title}
          </h1>

          <GeometricDivider data-oid="vo.9q_i" />

          <h2
            className="font-serif text-xl tracking-wide text-gold uppercase"
            data-oid="s:hr39z"
          >
            {currentData.subtitle}
          </h2>

          <p
            className="font-serif text-lg text-navy/80 leading-relaxed px-4"
            data-oid="i_69c9e"
          >
            {currentData.description}
          </p>
        </div>

        {/* Decorative element based on step */}
        <div className="mt-12" data-oid="h73b7gq">
          {currentStep === 0 && <SunburstIcon data-oid="qvlmy1v" />}
          {currentStep === 1 && <DiamondPattern data-oid="_dejctv" />}
          {currentStep === 2 && <SteppedPattern data-oid="39eae:b" />}
        </div>
      </div>

      {/* Bottom CTA */}
      <div
        className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-ivory via-ivory to-transparent"
        data-oid="95ze91w"
      >
        <button
          onClick={handleNext}
          className="w-full bg-navy hover:bg-navy/90 text-ivory py-4 px-8 font-display text-lg tracking-luxury uppercase border border-gold/30 transition-all relative group overflow-hidden"
          data-oid="jao60-o"
        >
          {/* Gold accent on hover */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/10 to-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
            data-oid="u:_cu7f"
          ></div>
          <span className="relative" data-oid="550:h8y">
            {currentStep < onboardingData.length - 1 ? "Далее" : "Начать"}
          </span>
        </button>
      </div>
    </div>
  );
}

// Decorative SVG components
const SunburstIcon = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-oid="_2zn_7."
  >
    <circle
      cx="40"
      cy="40"
      r="8"
      fill="url(#sunburstGold)"
      data-oid="unhr3cb"
    />
    {Array.from({ length: 12 }).map((_, i) => {
      const angle = (i * 30 * Math.PI) / 180;
      const x1 = 40 + Math.cos(angle) * 15;
      const y1 = 40 + Math.sin(angle) * 15;
      const x2 = 40 + Math.cos(angle) * 35;
      const y2 = 40 + Math.sin(angle) * 35;
      return (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="url(#sunburstGold)"
          strokeWidth="2"
          strokeLinecap="round"
          data-oid="3kor8vc"
        />
      );
    })}
    <defs data-oid="w9u-8-x">
      <linearGradient
        id="sunburstGold"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
        data-oid="2gn85zx"
      >
        <stop offset="0%" stopColor="#B8941F" data-oid="u1-2s1r" />
        <stop offset="50%" stopColor="#D4AF37" data-oid="qm1so3y" />
        <stop offset="100%" stopColor="#E8C870" data-oid="s8kl:hi" />
      </linearGradient>
    </defs>
  </svg>
);

const DiamondPattern = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-oid="q_ofmsw"
  >
    <path
      d="M40 10 L60 40 L40 70 L20 40 Z"
      stroke="url(#diamondGold)"
      strokeWidth="2"
      fill="none"
      data-oid="dlp0xvm"
    />
    <path
      d="M40 20 L55 40 L40 60 L25 40 Z"
      stroke="url(#diamondGold)"
      strokeWidth="1.5"
      fill="url(#diamondGold)"
      fillOpacity="0.1"
      data-oid="j9v:-vd"
    />
    <circle cx="40" cy="40" r="4" fill="url(#diamondGold)" data-oid="e-z:d65" />
    <defs data-oid="z:do5.b">
      <linearGradient
        id="diamondGold"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
        data-oid="c:oe:81"
      >
        <stop offset="0%" stopColor="#D4AF37" data-oid="6qqukpj" />
        <stop offset="100%" stopColor="#B8941F" data-oid="0eetw:t" />
      </linearGradient>
    </defs>
  </svg>
);

const SteppedPattern = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-oid="zpudox9"
  >
    <rect
      x="30"
      y="30"
      width="20"
      height="20"
      fill="url(#steppedGold)"
      data-oid="rb1lxn7"
    />
    <rect
      x="25"
      y="25"
      width="30"
      height="30"
      stroke="url(#steppedGold)"
      strokeWidth="1.5"
      fill="none"
      data-oid="7cm9z0z"
    />
    <rect
      x="20"
      y="20"
      width="40"
      height="40"
      stroke="url(#steppedGold)"
      strokeWidth="1"
      fill="none"
      opacity="0.5"
      data-oid="xmwt75u"
    />
    <defs data-oid="um_ac_-">
      <linearGradient
        id="steppedGold"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
        data-oid="vzl59d_"
      >
        <stop offset="0%" stopColor="#E8C870" data-oid="mg3p39-" />
        <stop offset="100%" stopColor="#B8941F" data-oid="-:w-hff" />
      </linearGradient>
    </defs>
  </svg>
);
