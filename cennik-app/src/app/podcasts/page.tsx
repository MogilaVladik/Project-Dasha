"use client";

import React from "react";
import Link from "next/link";
import {
  ArtDecoOrnament,
  GeometricDivider,
} from "@/components/ArtDecoOrnament";
import { BottomNav } from "@/components/BottomNav";

const podcasts = [
  {
    id: 24,
    title: "Будущее российского ритейла",
    guest: "Дмитрий Иванов, CEO «Лента»",
    description:
      "Обсуждаем стратегию развития сети, работу с поставщиками и планы на 2025 год.",
    duration: "45 мин",
    date: "15 января 2025",
    season: 3,
    episode: 4,
  },
  {
    id: 23,
    title: "Цифровизация поставок",
    guest: "Анна Смирнова, CDO «X5 Group»",
    description:
      "Как технологии меняют логистику: от автоматизации складов до прогнозирования спроса.",
    duration: "38 мин",
    date: "1 января 2025",
    season: 3,
    episode: 3,
  },
  {
    id: 22,
    title: "Тренды категорийного менеджмента",
    guest: "Сергей Петров, эксперт Nielsen",
    description:
      "Анализ данных, оптимизация ассортимента и работа с новыми категориями товаров.",
    duration: "42 мин",
    date: "15 декабря 2024",
    season: 3,
    episode: 2,
  },
  {
    id: 21,
    title: "Экологичность в ритейле",
    guest: "Елена Волкова, директор по устойчивому развитию «Азбука Вкуса»",
    description:
      "Как бренды внедряют эко-стандарты и что это значит для поставщиков.",
    duration: "35 мин",
    date: "1 декабря 2024",
    season: 3,
    episode: 1,
  },
  {
    id: 20,
    title: "Маркетплейсы: новая реальность",
    guest: "Михаил Соколов, VP «Яндекс.Маркет»",
    description:
      "Стратегии продаж на маркетплейсах, работа с рейтингами и отзывами.",
    duration: "50 мин",
    date: "15 ноября 2024",
    season: 2,
    episode: 12,
  },
  {
    id: 19,
    title: "Ценообразование в нестабильные времена",
    guest: "Ольга Кузнецова, финансовый директор «Дикси»",
    description:
      "Как балансировать между рентабельностью и конкурентоспособностью.",
    duration: "40 мин",
    date: "1 ноября 2024",
    season: 2,
    episode: 11,
  },
];

export default function PodcastsPage() {
  return (
    <div className="min-h-screen bg-ivory pb-24" data-oid="fyn.1h0">
      {/* Header */}
      <header
        className="bg-navy pt-8 pb-6 px-6 border-b-2 border-gold/40"
        data-oid="o4yo8ot"
      >
        <div className="max-w-2xl mx-auto" data-oid="q9iwpes">
          <ArtDecoOrnament className="mb-4" data-oid="5t7gk8n" />
          <h1
            className="font-display text-3xl font-bold tracking-luxury text-center mb-2"
            data-oid="2uu93up"
          >
            <span className="gold-gradient-text" data-oid="rira418">
              ПОДКАСТЫ
            </span>
          </h1>
          <p
            className="font-serif text-ivory/80 text-center text-sm tracking-wide"
            data-oid="0e_552i"
          >
            Беседы с лидерами индустрии
          </p>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-6 py-8 space-y-6" data-oid="r4yx_tr">
        {/* Featured Podcast */}
        <section data-oid="bn599xk">
          <div className="mb-4" data-oid="rp7fu9x">
            <h2
              className="font-display text-xl font-semibold tracking-art-deco text-navy text-center mb-2"
              data-oid="_acis3z"
            >
              ПОСЛЕДНИЙ ЭПИЗОД
            </h2>
            <GeometricDivider data-oid="oivmc_7" />
          </div>

          <FeaturedPodcast podcast={podcasts[0]} data-oid="-.1ltxn" />
        </section>

        {/* All Episodes */}
        <section data-oid="wh_i_z-">
          <h2
            className="font-display text-xl font-semibold tracking-art-deco text-navy mb-4"
            data-oid="u3y_7x:"
          >
            ВСЕ ЭПИЗОДЫ
          </h2>

          <div className="space-y-4" data-oid="_i9h83e">
            {podcasts.slice(1).map((podcast) => (
              <PodcastCard
                key={podcast.id}
                podcast={podcast}
                data-oid="4sr0:qo"
              />
            ))}
          </div>
        </section>
      </div>

      <BottomNav data-oid="_:gxdlr" />
    </div>
  );
}

// Featured Podcast Component
const FeaturedPodcast = ({ podcast }: { podcast: (typeof podcasts)[0] }) => {
  return (
    <Link href={`/podcasts/${podcast.id}`} data-oid="r-d2kee">
      <div
        className="bg-gradient-to-br from-navy via-navy to-black p-8 border-2 border-gold/40 hover:border-gold transition-all cursor-pointer group relative overflow-hidden"
        data-oid="p-br-:j"
      >
        {/* Decorative corners */}
        <div
          className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-gold/50"
          data-oid="yrgb:.2"
        ></div>
        <div
          className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-gold/50"
          data-oid="5cpddma"
        ></div>
        <div
          className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-gold/50"
          data-oid="b-qdaqa"
        ></div>
        <div
          className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-gold/50"
          data-oid="4v446.g"
        ></div>

        {/* Podcast Icon */}
        <div className="flex justify-center mb-6" data-oid="kgopc5o">
          <div
            className="w-20 h-20 border-2 border-gold/40 flex items-center justify-center"
            data-oid="0:6fn.a"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              data-oid=":2u50td"
            >
              <circle cx="20" cy="20" r="3" fill="#D4AF37" data-oid="5t.jj6x" />
              <circle
                cx="20"
                cy="20"
                r="8"
                stroke="#D4AF37"
                strokeWidth="2"
                data-oid="q5uk8jq"
              />
              <circle
                cx="20"
                cy="20"
                r="14"
                stroke="#D4AF37"
                strokeWidth="1.5"
                opacity="0.5"
                data-oid="vs.c_w9"
              />
            </svg>
          </div>
        </div>

        <div className="text-center space-y-3 relative z-10" data-oid="6:0eh9b">
          <div className="font-serif text-gold text-sm" data-oid="hw3bkz1">
            Сезон {podcast.season} · Эпизод {podcast.episode}
          </div>

          <h3
            className="font-display text-2xl font-bold text-ivory group-hover:text-gold transition-colors"
            data-oid="cqp2lpb"
          >
            {podcast.title}
          </h3>

          <div
            className="h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"
            data-oid="4lff63n"
          ></div>

          <p
            className="font-serif text-ivory/80 text-base leading-relaxed"
            data-oid="ycl2jhr"
          >
            {podcast.guest}
          </p>

          <p
            className="font-serif text-ivory/60 text-sm leading-relaxed px-4"
            data-oid="n7axs5d"
          >
            {podcast.description}
          </p>

          <div
            className="flex items-center justify-center gap-4 pt-2 font-serif text-xs text-gold-light"
            data-oid="aduvtni"
          >
            <span data-oid="ouls:u5">{podcast.duration}</span>
            <span data-oid="em-y61f">•</span>
            <span data-oid="p4_:5b_">{podcast.date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

// Regular Podcast Card
const PodcastCard = ({ podcast }: { podcast: (typeof podcasts)[0] }) => {
  return (
    <Link href={`/podcasts/${podcast.id}`} data-oid="sj7mf:x">
      <div
        className="flex gap-4 p-5 bg-cream border border-navy/10 hover:border-gold/60 transition-all cursor-pointer group"
        data-oid="3q28m2x"
      >
        {/* Podcast Icon */}
        <div
          className="w-16 h-16 flex-shrink-0 bg-navy border border-gold/30 flex items-center justify-center"
          data-oid="8xk05dn"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            data-oid="5dh-hpx"
          >
            <circle cx="14" cy="14" r="2" fill="#D4AF37" data-oid="3bo5-r7" />
            <circle
              cx="14"
              cy="14"
              r="6"
              stroke="#D4AF37"
              strokeWidth="1.5"
              data-oid="t7a-z:r"
            />
            <circle
              cx="14"
              cy="14"
              r="10"
              stroke="#D4AF37"
              strokeWidth="1"
              opacity="0.5"
              data-oid="2kxu1ry"
            />
          </svg>
        </div>

        <div className="flex-1 min-w-0" data-oid="qv1ot4f">
          <div className="flex items-baseline gap-2 mb-1" data-oid="0nwmh1m">
            <span className="font-serif text-xs text-gold" data-oid="rea4uco">
              S{podcast.season}E{podcast.episode}
            </span>
            <span
              className="font-serif text-xs text-navy/40"
              data-oid="c9n5dlz"
            >
              •
            </span>
            <span
              className="font-serif text-xs text-navy/60"
              data-oid="pomvpmb"
            >
              {podcast.duration}
            </span>
          </div>

          <h3
            className="font-display text-lg font-semibold text-navy mb-1 group-hover:text-gold transition-colors"
            data-oid="23skq71"
          >
            {podcast.title}
          </h3>

          <p className="font-serif text-sm text-gold mb-2" data-oid="muq2uyj">
            {podcast.guest}
          </p>

          <p
            className="font-serif text-sm text-navy/70 leading-relaxed line-clamp-2"
            data-oid="5ks165c"
          >
            {podcast.description}
          </p>

          <p
            className="font-serif text-xs text-navy/50 mt-2"
            data-oid="192w.44"
          >
            {podcast.date}
          </p>
        </div>

        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="text-navy/30 group-hover:text-gold transition-colors flex-shrink-0 self-center"
          data-oid="clbmh.v"
        >
          <path
            d="M7 4L13 10L7 16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            data-oid="wa:mrfx"
          />
        </svg>
      </div>
    </Link>
  );
};
