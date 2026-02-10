"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GeometricDivider } from "@/components/ArtDecoOrnament";

const podcastData = {
  title: "Будущее российского ритейла",
  guest: "Дмитрий Иванов, CEO «Лента»",
  season: 3,
  episode: 4,
  duration: "45 мин",
  date: "15 января 2025",
  description:
    "В этом эпизоде мы беседуем с Дмитрием Ивановым о стратегии развития одной из крупнейших торговых сетей России, работе с поставщиками, цифровой трансформации и планах на 2025 год.",
  transcript: `[00:00] Добро пожаловать в новый эпизод подкаста Ценник. Сегодня с нами Дмитрий Иванов, генеральный директор сети «Лента».

[00:15] Дмитрий, спасибо что нашли время. Давайте начнем с главного — как вы оцениваете текущее состояние российского ритейла?

[00:30] Я считаю, что мы находимся на пороге очень интересного этапа. Цифровизация, которая раньше казалась опцией, теперь стала необходимостью. Потребители изменились, их ожидания выросли.

[01:00] Можете рассказать подробнее о ваших инициативах в области цифровой трансформации?

[01:15] Конечно. Мы активно инвестируем в технологии предиктивной аналитики. Наша цель — понимать, что захочет купить покупатель еще до того, как он сам об этом подумает. Это звучит амбициозно, но это реально.

[02:00] А как насчет работы с поставщиками? Что изменилось за последние годы?

[02:15] Отношения с поставщиками стали гораздо более прозрачными и партнерскими. Мы внедрили единую цифровую платформу для обмена данными в реальном времени. Поставщики видят продажи своих товаров, могут корректировать поставки без длительных согласований.

[03:00] Это очень прогрессивный подход. Как поставщики реагируют на такие изменения?

[03:15] Поначалу были опасения, но сейчас все понимают выгоду. Снизились потери от overstock, выросла оборачиваемость товаров. Это win-win для всех участников цепи.

[04:00] Давайте поговорим об омниканальности. Как «Лента» развивается в онлайне?

[04:15] Онлайн для нас — это не отдельный канал, а интегрированная часть общей стратегии. Покупатель может начать покупку в приложении, забрать товар из темного магазина, а часть заказа получить курьером. Важна гибкость.

[05:00] Какие тренды в ритейле вы считаете наиболее важными на ближайшие годы?

[05:15] Персонализация, устойчивое развитие и автоматизация. Покупатели хотят индивидуального подхода, они выбирают экологичные бренды, и они ждут удобства на каждом этапе покупки.`,
};

export default function PodcastDetailPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [highlightedText, setHighlightedText] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setHighlightedText(query);
  };

  const getHighlightedContent = () => {
    if (!highlightedText) return podcastData.transcript;

    const regex = new RegExp(`(${highlightedText})`, "gi");
    return podcastData.transcript.replace(
      regex,
      '<mark class="bg-gold/30 text-navy">$1</mark>',
    );
  };

  return (
    <div className="min-h-screen bg-ivory" data-oid="-m4gc3w">
      {/* Fixed Header */}
      <header
        className="sticky top-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-gold/30"
        data-oid="fipvsig"
      >
        <div
          className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between"
          data-oid="nsg1z2-"
        >
          <Link
            href="/podcasts"
            className="text-ivory/80 hover:text-gold transition-colors"
            data-oid="p57voj_"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              data-oid="p5.no7f"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-oid="sao6kr3"
              />
            </svg>
          </Link>

          <div
            className="font-display text-sm tracking-luxury text-gold"
            data-oid="nrr0hv7"
          >
            ПОДКАСТЫ
          </div>

          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-ivory/80 hover:text-gold transition-colors"
            aria-label="Поиск в транскрипте"
            data-oid="liccuyv"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              data-oid="10fx_hf"
            >
              <circle
                cx="8"
                cy="8"
                r="6"
                stroke="currentColor"
                strokeWidth="1.5"
                data-oid="u0t-ym7"
              />
              <path
                d="M12.5 12.5L17 17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                data-oid="0m2odrb"
              />
            </svg>
          </button>
        </div>

        {/* In-transcript search bar */}
        {searchOpen && (
          <div
            className="border-t border-gold/20 bg-navy px-6 py-3"
            data-oid="glk-oku"
          >
            <div className="max-w-3xl mx-auto" data-oid="385pkeg">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Поиск по транскрипту подкаста..."
                className="w-full px-4 py-2 bg-ivory/10 border border-gold/30 text-ivory placeholder-ivory/40 focus:outline-none focus:border-gold font-serif text-sm"
                autoFocus
                data-oid="zgwmqr_"
              />
            </div>
          </div>
        )}
      </header>

      {/* Podcast Content */}
      <article className="max-w-3xl mx-auto px-6 py-12" data-oid="u0j1psz">
        {/* Podcast Cover */}
        <div className="mb-8" data-oid="cbqshom">
          <div
            className="aspect-square max-w-sm mx-auto bg-gradient-to-br from-navy via-navy to-black border-2 border-gold/40 flex items-center justify-center p-12"
            data-oid="5nxy9x9"
          >
            <div className="text-center space-y-6" data-oid="22kwozt">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                className="mx-auto"
                data-oid="6:9mq1a"
              >
                <circle
                  cx="40"
                  cy="40"
                  r="6"
                  fill="#D4AF37"
                  data-oid="n9_t0gp"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="16"
                  stroke="#D4AF37"
                  strokeWidth="3"
                  data-oid="-i9xg1."
                />
                <circle
                  cx="40"
                  cy="40"
                  r="28"
                  stroke="#D4AF37"
                  strokeWidth="2"
                  opacity="0.5"
                  data-oid="r3mf3us"
                />
              </svg>

              <div
                className="font-display text-xl text-gold tracking-luxury"
                data-oid="-7puvm3"
              >
                ПОДКАСТ
              </div>

              <div
                className="h-px w-20 bg-gold/40 mx-auto"
                data-oid="ex9ky7v"
              ></div>

              <div
                className="font-serif text-gold-light text-sm"
                data-oid="qi5hsba"
              >
                S{podcastData.season}E{podcastData.episode}
              </div>
            </div>
          </div>
        </div>

        {/* Episode Info */}
        <div className="text-center mb-8" data-oid="3e3wrf1">
          <div
            className="font-serif text-sm text-gold tracking-wide mb-2"
            data-oid="q7fxjsm"
          >
            Сезон {podcastData.season} · Эпизод {podcastData.episode}
          </div>

          <h1
            className="font-display text-3xl md:text-4xl font-bold text-navy mb-3"
            data-oid="6zl9068"
          >
            {podcastData.title}
          </h1>

          <h2 className="font-serif text-lg text-gold mb-4" data-oid="3um1fia">
            {podcastData.guest}
          </h2>

          <div
            className="flex items-center justify-center gap-3 font-serif text-sm text-navy/60"
            data-oid="0xd78av"
          >
            <span data-oid="w8nv4_9">{podcastData.duration}</span>
            <span data-oid=".w.y3_u">•</span>
            <span data-oid="-5b24rz">{podcastData.date}</span>
          </div>
        </div>

        <GeometricDivider data-oid="ksj0_rk" />

        {/* Description */}
        <div className="mb-8" data-oid="r.50_:a">
          <p
            className="font-serif text-base text-navy/80 leading-relaxed text-center max-w-2xl mx-auto"
            data-oid="yn::r-n"
          >
            {podcastData.description}
          </p>
        </div>

        {/* Player Controls */}
        <div className="mb-12" data-oid="fmrsw6j">
          <div
            className="bg-cream border-2 border-navy/20 p-6"
            data-oid="p50rr:a"
          >
            <div
              className="flex items-center justify-center gap-6 mb-4"
              data-oid="9tbl5no"
            >
              {/* Skip back */}
              <button
                className="text-navy hover:text-gold transition-colors"
                data-oid="5ydhik3"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  data-oid="djff9s0"
                >
                  <path
                    d="M22 8L12 16L22 24V8Z"
                    fill="currentColor"
                    data-oid="4dnuq7_"
                  />
                  <path
                    d="M10 8V24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    data-oid="g1q-7ly"
                  />
                </svg>
              </button>

              {/* Play/Pause */}
              <button
                className="w-16 h-16 bg-navy hover:bg-navy/90 border-2 border-gold/40 flex items-center justify-center transition-all group"
                data-oid="4e91hxx"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  data-oid="k-cja-m"
                >
                  <path
                    d="M8 5L19 12L8 19V5Z"
                    fill="#D4AF37"
                    className="group-hover:fill-gold-light transition-colors"
                    data-oid="2_ot:8-"
                  />
                </svg>
              </button>

              {/* Skip forward */}
              <button
                className="text-navy hover:text-gold transition-colors"
                data-oid="dy-2vg1"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  data-oid="cn_so_n"
                >
                  <path
                    d="M10 8L20 16L10 24V8Z"
                    fill="currentColor"
                    data-oid="95bjqf6"
                  />
                  <path
                    d="M22 8V24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    data-oid="021j4lr"
                  />
                </svg>
              </button>
            </div>

            {/* Progress bar */}
            <div className="space-y-2" data-oid="2tnr_f_">
              <div className="h-1 bg-navy/10 relative" data-oid="zmdg.w7">
                <div
                  className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-gold-dark via-gold to-gold-light"
                  data-oid="gx7xmyh"
                ></div>
              </div>
              <div
                className="flex justify-between font-serif text-xs text-navy/60"
                data-oid="50bgplj"
              >
                <span data-oid="qxj49uc">15:00</span>
                <span data-oid="sabl7yp">45:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Transcript */}
        <section data-oid="0wxvcqn">
          <h3
            className="font-display text-2xl font-semibold text-navy text-center mb-8"
            data-oid="a0v5hcr"
          >
            ТРАНСКРИПТ ЭПИЗОДА
          </h3>

          <div
            className="bg-cream border border-navy/10 p-6"
            data-oid="d-tht.c"
          >
            <div
              className="font-serif text-base text-navy/80 leading-loose whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: getHighlightedContent() }}
              data-oid="jkzx52p"
            />
          </div>
        </section>

        {/* Related Podcasts */}
        <section className="mt-16" data-oid="gdk:n0n">
          <h3
            className="font-display text-2xl font-semibold text-navy text-center mb-8"
            data-oid="b5t1-12"
          >
            ДРУГИЕ ЭПИЗОДЫ
          </h3>

          <div className="space-y-3" data-oid="nfxspb9">
            <RelatedPodcast
              title="Цифровизация поставок"
              episode="S3E3"
              duration="38 мин"
              data-oid="i3_2r5:"
            />

            <RelatedPodcast
              title="Тренды категорийного менеджмента"
              episode="S3E2"
              duration="42 мин"
              data-oid=":4d3jd-"
            />
          </div>
        </section>
      </article>

      <div className="h-20" data-oid="hn6c0fv"></div>
    </div>
  );
}

const RelatedPodcast = ({
  title,
  episode,
  duration,
}: {
  title: string;
  episode: string;
  duration: string;
}) => (
  <Link href="/podcasts/23" data-oid="197r3r:">
    <div
      className="flex items-center gap-4 p-4 bg-cream border border-navy/10 hover:border-gold/60 transition-all group cursor-pointer"
      data-oid="tnld:b4"
    >
      <div
        className="w-12 h-12 bg-navy border border-gold/30 flex items-center justify-center flex-shrink-0"
        data-oid=":w4btgt"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          data-oid="ekfh7u:"
        >
          <circle cx="10" cy="10" r="2" fill="#D4AF37" data-oid="yw3s7.l" />
          <circle
            cx="10"
            cy="10"
            r="5"
            stroke="#D4AF37"
            strokeWidth="1.5"
            data-oid="k67as68"
          />
        </svg>
      </div>

      <div className="flex-1 min-w-0" data-oid="9sr71iu">
        <p className="font-serif text-xs text-gold mb-1" data-oid="rh5ehgp">
          {episode}
        </p>
        <h4
          className="font-display text-base font-semibold text-navy group-hover:text-gold transition-colors truncate"
          data-oid="1k15dd7"
        >
          {title}
        </h4>
        <p className="font-serif text-xs text-navy/50" data-oid=":snaibn">
          {duration}
        </p>
      </div>

      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className="text-navy/30 group-hover:text-gold transition-colors flex-shrink-0"
        data-oid="czyz5ww"
      >
        <path
          d="M6 3L11 8L6 13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          data-oid="d_ox2vx"
        />
      </svg>
    </div>
  </Link>
);
