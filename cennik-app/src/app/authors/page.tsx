"use client";

import React from "react";
import { ArtDecoOrnament } from "@/components/ArtDecoOrnament";
import { BottomNav } from "@/components/BottomNav";

const authors = [
  {
    id: 1,
    name: "Александр Новиков",
    role: "Главный редактор",
    bio: "Более 15 лет в ритейл-журналистике. Бывший редактор Forbes Retail, специалист по стратегическому развитию торговых сетей.",
    articles: 48,
  },
  {
    id: 2,
    name: "Мария Лебедева",
    role: "Обозреватель логистики",
    bio: "Эксперт в области логистики и supply chain. MBA Стокгольмской школы экономики. Консультант для крупнейших дистрибьюторов.",
    articles: 32,
  },
  {
    id: 3,
    name: "Игорь Соболев",
    role: "Аналитик рынка",
    bio: "Специалист по категорийному менеджменту и рыночной аналитике. Бывший директор Nielsen Russia.",
    articles: 29,
  },
  {
    id: 4,
    name: "Елена Волкова",
    role: "Редактор подкастов",
    bio: "Журналист, ведущая, продюсер. Опыт работы на радио «Коммерсантъ FM» и РБК. Специализация: интервью с топ-менеджментом.",
    articles: 15,
  },
  {
    id: 5,
    name: "Дмитрий Ковалев",
    role: "Обозреватель технологий",
    bio: "Эксперт по цифровизации ритейла. CTO в нескольких стартапах. Специализация: автоматизация, AI и ML в торговле.",
    articles: 24,
  },
  {
    id: 6,
    name: "Ольга Смирнова",
    role: "Редактор маркетинга",
    bio: "Специалист по маркетинговым стратегиям в FMCG. 10 лет в брендинге и продвижении товаров массового потребления.",
    articles: 21,
  },
  {
    id: 7,
    name: "Сергей Петров",
    role: "Финансовый обозреватель",
    bio: "Аналитик рынка капитала. Специализация: финансовые показатели ритейлеров, инвестиции и M&A в торговле.",
    articles: 18,
  },
  {
    id: 8,
    name: "Анна Кузнецова",
    role: "Редактор трендов",
    bio: "Исследователь потребительского поведения. Регулярный спикер на отраслевых конференциях. Соавтор книги «Ритейл будущего».",
    articles: 27,
  },
];

export default function AuthorsPage() {
  return (
    <div className="min-h-screen bg-ivory pb-24" data-oid=":p_kh59">
      {/* Header */}
      <header
        className="bg-navy pt-8 pb-6 px-6 border-b-2 border-gold/40"
        data-oid="7i-u.to"
      >
        <div className="max-w-2xl mx-auto" data-oid="a2:.24j">
          <ArtDecoOrnament className="mb-4" data-oid="fi215no" />
          <h1
            className="font-display text-3xl font-bold tracking-luxury text-center mb-2"
            data-oid="4ax9hqw"
          >
            <span className="gold-gradient-text" data-oid="5sui51c">
              НАШИ АВТОРЫ
            </span>
          </h1>
          <p
            className="font-serif text-ivory/80 text-center text-sm tracking-wide"
            data-oid="wx-z97n"
          >
            Эксперты и журналисты издания
          </p>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-6 py-8 space-y-4" data-oid="s5o.qq0">
        {authors.map((author) => (
          <AuthorCard key={author.id} author={author} data-oid="-aslr.0" />
        ))}
      </div>

      <BottomNav data-oid="w0_wh4l" />
    </div>
  );
}

// Author Card Component
const AuthorCard = ({ author }: { author: (typeof authors)[0] }) => {
  return (
    <div
      className="bg-cream border border-navy/10 hover:border-gold/60 transition-all p-6 group"
      data-oid="8kmwvv:"
    >
      <div className="flex gap-5" data-oid="sky_pup">
        {/* Art Deco Avatar Frame */}
        <div className="flex-shrink-0" data-oid="ra0i3it">
          <div className="relative w-20 h-20" data-oid="305n007">
            {/* Outer decorative frame */}
            <div
              className="absolute inset-0 border-2 border-gold/40"
              data-oid="96nl552"
            ></div>
            <div
              className="absolute inset-1 border border-gold/20"
              data-oid="3v6sxra"
            ></div>

            {/* Avatar placeholder with initials */}
            <div
              className="absolute inset-2 bg-navy flex items-center justify-center"
              data-oid="jk2i_yd"
            >
              <span
                className="font-display text-xl font-bold text-gold"
                data-oid="3ltl:cp"
              >
                {author.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>

            {/* Corner decorations */}
            <div
              className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-gold"
              data-oid="pq8gvva"
            ></div>
            <div
              className="absolute -top-1 -right-1 w-3 h-3 border-r-2 border-t-2 border-gold"
              data-oid="xr702zt"
            ></div>
            <div
              className="absolute -bottom-1 -left-1 w-3 h-3 border-l-2 border-b-2 border-gold"
              data-oid="rdwpmzn"
            ></div>
            <div
              className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-gold"
              data-oid="3vy0tur"
            ></div>
          </div>
        </div>

        {/* Author Info */}
        <div className="flex-1 min-w-0" data-oid="owl53u6">
          <h3
            className="font-display text-xl font-semibold text-navy mb-1 group-hover:text-gold transition-colors"
            data-oid="35j.2ri"
          >
            {author.name}
          </h3>

          <p
            className="font-serif text-sm text-gold tracking-wide uppercase mb-3"
            data-oid="p7tkjlf"
          >
            {author.role}
          </p>

          <p
            className="font-serif text-sm text-navy/70 leading-relaxed mb-3"
            data-oid="0d3g250"
          >
            {author.bio}
          </p>

          {/* Stats */}
          <div className="flex items-center gap-4" data-oid="fv68leu">
            <div className="flex items-center gap-2" data-oid="25krv4e">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="text-gold"
                data-oid="ed5irlo"
              >
                <path
                  d="M2 4H14M2 8H14M2 12H14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  data-oid="lwvms4_"
                />
              </svg>
              <span
                className="font-serif text-xs text-navy/60"
                data-oid="1.pjtr9"
              >
                {author.articles} статей
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom border */}
      <div
        className="mt-6 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"
        data-oid="80kcgbr"
      ></div>
    </div>
  );
};
