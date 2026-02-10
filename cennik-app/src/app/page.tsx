"use client";

import React from "react";
import Link from "next/link";
import { SearchBar } from "@/components/SearchBar";
import {
  ArtDecoOrnament,
  GeometricDivider,
} from "@/components/ArtDecoOrnament";
import { ArtDecoCard } from "@/components/ArtDecoCard";
import { BottomNav } from "@/components/BottomNav";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-ivory pb-24" data-oid="j6o3wpd">
      {/* Header */}
      <header
        className="bg-navy pt-8 pb-6 px-6 border-b-2 border-gold/40"
        data-oid=".sz.747"
      >
        <div className="max-w-2xl mx-auto" data-oid="j0e92n5">
          <h1
            className="font-display text-4xl font-bold tracking-luxury text-center mb-2"
            data-oid="uf1fyck"
          >
            <span className="gold-gradient-text" data-oid="xnf27ys">
              ЦЕННИК
            </span>
          </h1>
          <p
            className="font-serif text-ivory/80 text-center text-sm tracking-wide uppercase"
            data-oid="yso5y_f"
          >
            Ритейл Медиа · Издание №12 · 2025
          </p>
        </div>
      </header>

      {/* Search Bar */}
      <div
        className="px-6 -mt-4 relative z-10 max-w-2xl mx-auto"
        data-oid="ulapsu:"
      >
        <SearchBar
          onSearch={(query) => console.log("Searching:", query)}
          data-oid="jtseq:3"
        />
      </div>

      <div className="max-w-2xl mx-auto px-6 py-8 space-y-8" data-oid="quiv:er">
        {/* Latest Issue Cover */}
        <section data-oid="ue8:-h6">
          <div className="mb-4" data-oid="f912c-9">
            <ArtDecoOrnament className="mb-2" data-oid="my-_5r6" />
            <h2
              className="font-display text-2xl font-semibold tracking-art-deco text-navy text-center"
              data-oid="425a78m"
            >
              АКТУАЛЬНЫЙ ВЫПУСК
            </h2>
          </div>

          <Link href="/article/featured" data-oid="y4afy7a">
            <ArtDecoCard
              variant="elevated"
              className="hover:scale-[1.02] transition-transform cursor-pointer"
              data-oid="s_6ivq:"
            >
              {/* Magazine Cover Design */}
              <div
                className="aspect-[3/4] bg-gradient-to-br from-navy via-navy to-black flex flex-col items-center justify-center p-8 text-center border border-gold/30"
                data-oid="kw2c4d_"
              >
                <div className="space-y-6" data-oid="cb7ihpc">
                  <div
                    className="font-display text-5xl font-bold tracking-luxury text-gold"
                    data-oid="fc0bzbf"
                  >
                    ЦЕННИК
                  </div>
                  <div
                    className="h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"
                    data-oid="4o4nbie"
                  ></div>
                  <div
                    className="font-serif text-ivory text-xl leading-relaxed px-4"
                    data-oid="r3ttbq-"
                  >
                    Будущее поставок в цифровую эру
                  </div>
                  <div
                    className="h-px w-24 bg-gold/40 mx-auto"
                    data-oid="ihayq_u"
                  ></div>
                  <div
                    className="font-serif text-gold-light text-sm tracking-wide"
                    data-oid="9lzwpgz"
                  >
                    Q1 2025 · ВЫПУСК XII
                  </div>
                </div>
              </div>

              <div className="mt-4 text-center" data-oid="j.a4egy">
                <h3
                  className="font-display text-xl font-semibold text-navy mb-2"
                  data-oid="d84hddh"
                >
                  Зимний выпуск 2025
                </h3>
                <p className="font-serif text-navy/70" data-oid="r4yn5sr">
                  Цифровая трансформация, новые технологии логистики, и интервью
                  с лидерами индустрии
                </p>
              </div>
            </ArtDecoCard>
          </Link>
        </section>

        <GeometricDivider data-oid="q6gm8o-" />

        {/* Featured Articles */}
        <section data-oid="xbhy3c5">
          <h2
            className="font-display text-2xl font-semibold tracking-art-deco text-navy mb-6 text-center"
            data-oid="f3pnizf"
          >
            ИЗБРАННЫЕ СТАТЬИ
          </h2>

          <div className="space-y-4" data-oid="6ky52lt">
            <ArticlePreview
              title="Тренды поставок в 2025"
              category="Аналитика"
              excerpt="Как изменится логистика в ближайшие годы: от автоматизации складов до экологических стандартов."
              readTime="12 мин"
              href="/article/trends-2025"
              data-oid="n0495w4"
            />

            <ArticlePreview
              title="Диалог с CEO сети 'Магнит'"
              category="Интервью"
              excerpt="Эксклюзивная беседа о стратегии развития, работе с поставщиками и планах на будущее."
              readTime="18 мин"
              href="/article/magnit-ceo"
              data-oid="6jcof_7"
            />

            <ArticlePreview
              title="Эффективность категорийного менеджмента"
              category="Стратегия"
              excerpt="Методы оптимизации ассортимента и построения долгосрочных отношений с ритейлерами."
              readTime="10 мин"
              href="/article/category-management"
              data-oid="qbquf0-"
            />
          </div>
        </section>

        <GeometricDivider data-oid="rgxpmu8" />

        {/* Podcasts Preview */}
        <section data-oid="v19vvyd">
          <div
            className="flex items-center justify-between mb-6"
            data-oid="1lfcwmr"
          >
            <h2
              className="font-display text-2xl font-semibold tracking-art-deco text-navy"
              data-oid="f85bjbn"
            >
              ПОДКАСТЫ
            </h2>
            <Link
              href="/podcasts"
              className="font-serif text-gold hover:text-gold-light transition-colors text-sm"
              data-oid="z4im-12"
            >
              Все выпуски →
            </Link>
          </div>

          <div className="space-y-3" data-oid="pjd6dej">
            <PodcastPreview
              title="Будущее российского ритейла"
              episode="Эпизод 24"
              duration="45 мин"
              href="/podcasts/24"
              data-oid="qo8p8md"
            />

            <PodcastPreview
              title="Цифровизация поставок"
              episode="Эпизод 23"
              duration="38 мин"
              href="/podcasts/23"
              data-oid="7v9ij6_"
            />
          </div>
        </section>

        {/* Subscription CTA */}
        <section className="pt-4" data-oid="8ggml.8">
          <Link href="/subscription" data-oid="xrv6ggf">
            <ArtDecoCard
              variant="bordered"
              className="hover:border-gold transition-colors cursor-pointer"
              data-oid="xk6l0os"
            >
              <div className="text-center space-y-3" data-oid="f1y:vu5">
                <div className="text-gold text-3xl" data-oid="jukqz60">
                  ✦
                </div>
                <h3
                  className="font-display text-xl font-semibold text-navy"
                  data-oid="327a8pj"
                >
                  ПРЕМИУМ ПОДПИСКА
                </h3>
                <p
                  className="font-serif text-navy/70 text-sm"
                  data-oid="obw93j1"
                >
                  Получите полный доступ к архиву изданий и эксклюзивным
                  материалам
                </p>
                <div
                  className="inline-block px-6 py-2 bg-navy text-ivory font-serif text-sm tracking-wide"
                  data-oid="kb7bsuk"
                >
                  Узнать больше
                </div>
              </div>
            </ArtDecoCard>
          </Link>
        </section>
      </div>

      <BottomNav data-oid="qfpeesa" />
    </div>
  );
}

// Article Preview Component
const ArticlePreview = ({
  title,
  category,
  excerpt,
  readTime,
  href,
}: {
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  href: string;
}) => (
  <Link href={href} data-oid="l-2ti4k">
    <div
      className="bg-cream border border-navy/20 hover:border-gold/60 transition-all p-5 cursor-pointer group"
      data-oid="yqamsqu"
    >
      <div className="flex items-start justify-between mb-2" data-oid="2z10l8d">
        <span
          className="font-serif text-xs text-gold tracking-wider uppercase"
          data-oid="b5k.ys9"
        >
          {category}
        </span>
        <span className="font-serif text-xs text-navy/50" data-oid="zh5x-e_">
          {readTime}
        </span>
      </div>
      <h3
        className="font-display text-lg font-semibold text-navy mb-2 group-hover:text-gold transition-colors"
        data-oid="cmsw9y3"
      >
        {title}
      </h3>
      <p
        className="font-serif text-sm text-navy/70 leading-relaxed"
        data-oid="7e7uu-d"
      >
        {excerpt}
      </p>
    </div>
  </Link>
);

// Podcast Preview Component
const PodcastPreview = ({
  title,
  episode,
  duration,
  href,
}: {
  title: string;
  episode: string;
  duration: string;
  href: string;
}) => (
  <Link href={href} data-oid="c_wwkhd">
    <div
      className="flex items-center gap-4 p-4 bg-cream border border-navy/10 hover:border-gold/60 transition-all cursor-pointer group"
      data-oid="ofvlqhf"
    >
      {/* Podcast icon */}
      <div
        className="w-12 h-12 bg-navy flex items-center justify-center flex-shrink-0 border border-gold/30"
        data-oid="7-w4utz"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-oid="us7yoqw"
        >
          <circle cx="12" cy="12" r="2" fill="#D4AF37" data-oid="e5dqwdc" />
          <circle
            cx="12"
            cy="12"
            r="5"
            stroke="#D4AF37"
            strokeWidth="1.5"
            data-oid="7sf4vhv"
          />

          <circle
            cx="12"
            cy="12"
            r="8"
            stroke="#D4AF37"
            strokeWidth="1"
            opacity="0.5"
            data-oid="nb15_7-"
          />
        </svg>
      </div>

      <div className="flex-1 min-w-0" data-oid="xn29rdi">
        <p className="font-serif text-xs text-gold mb-1" data-oid="rdpjbue">
          {episode}
        </p>
        <h4
          className="font-display text-base font-semibold text-navy truncate group-hover:text-gold transition-colors"
          data-oid="rv5p5dc"
        >
          {title}
        </h4>
        <p className="font-serif text-xs text-navy/50" data-oid="3g2jxv0">
          {duration}
        </p>
      </div>
    </div>
  </Link>
);
