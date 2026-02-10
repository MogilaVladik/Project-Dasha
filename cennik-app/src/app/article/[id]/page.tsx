"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GeometricDivider } from "@/components/ArtDecoOrnament";

// Sample article content
const articleContent = {
  title: "Будущее поставок в цифровую эру",
  subtitle: "Как технологии меняют логистику и отношения с ритейлерами",
  author: "Мария Лебедева",
  authorRole: "Обозреватель логистики",
  date: "15 января 2025",
  readTime: "12 мин",
  category: "Аналитика",
  content: `Цифровая трансформация изменила ландшафт розничной торговли до неузнаваемости. То, что казалось футуристическим всего пять лет назад, сегодня становится стандартом индустрии.

Автоматизация складских процессов перестала быть привилегией крупнейших игроков. Средние дистрибьюторы активно внедряют роботизированные системы, которые не только повышают эффективность, но и минимизируют человеческий фактор в критических операциях.

Прогнозирование спроса на основе машинного обучения становится ключевым конкурентным преимуществом. Алгоритмы анализируют не только исторические данные продаж, но и внешние факторы: погоду, социальные тренды, экономические показатели. Точность прогнозов выросла с 60% до 85-90% за последние три года.

Блокчейн-технологии обещают революцию в прозрачности цепочек поставок. Возможность отслеживать каждый этап движения товара от производителя до конечного потребителя создает новый уровень доверия между всеми участниками процесса.

Экологические стандарты становятся не просто требованием регуляторов, но и ожиданием потребителей. Поставщики, которые инвестируют в зеленую логистику, получают преференции от ритейлеров и лояльность покупателей.

Интеграция систем между поставщиками и ритейлерами достигла нового уровня. API-интеграции позволяют обмениваться данными в реальном времени, автоматизировать заказы и синхронизировать остатки без участия человека.

Последняя миля доставки остается самым дорогим элементом логистической цепочки. Эксперименты с дронами и автономными транспортными средствами пока не дали массового решения, но направление перспективное.

Персонализация логистики становится реальностью. Гибкие окна доставки, выбор способа получения товара, возможность изменить адрес уже после оформления заказа — все это формирует новые ожидания потребителей.`,
};

export default function ArticlePage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [highlightedText, setHighlightedText] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setHighlightedText(query);
  };

  const getHighlightedContent = () => {
    if (!highlightedText) return articleContent.content;

    const regex = new RegExp(`(${highlightedText})`, "gi");
    return articleContent.content.replace(
      regex,
      '<mark class="bg-gold/30 text-navy">$1</mark>',
    );
  };

  return (
    <div className="min-h-screen bg-ivory" data-oid="vl5z_d5">
      {/* Fixed Header */}
      <header
        className="sticky top-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-gold/30"
        data-oid="bbrqne8"
      >
        <div
          className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between"
          data-oid="le7dnp6"
        >
          <Link
            href="/"
            className="text-ivory/80 hover:text-gold transition-colors"
            data-oid=".j-:vy-"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              data-oid="zx.:-_t"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-oid="240b2f_"
              />
            </svg>
          </Link>

          <div
            className="font-display text-sm tracking-luxury text-gold"
            data-oid="wuwg02p"
          >
            ЦЕННИК
          </div>

          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-ivory/80 hover:text-gold transition-colors"
            aria-label="Поиск в статье"
            data-oid="sssd5ky"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              data-oid="gu1thxu"
            >
              <circle
                cx="8"
                cy="8"
                r="6"
                stroke="currentColor"
                strokeWidth="1.5"
                data-oid=":uawlc7"
              />

              <path
                d="M12.5 12.5L17 17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                data-oid="tler78b"
              />
            </svg>
          </button>
        </div>

        {/* In-article search bar */}
        {searchOpen && (
          <div
            className="border-t border-gold/20 bg-navy px-6 py-3"
            data-oid="h3ymny4"
          >
            <div className="max-w-3xl mx-auto" data-oid="d2blfnj">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Поиск по тексту статьи..."
                className="w-full px-4 py-2 bg-ivory/10 border border-gold/30 text-ivory placeholder-ivory/40 focus:outline-none focus:border-gold font-serif text-sm"
                autoFocus
                data-oid="uj9t3n2"
              />
            </div>
          </div>
        )}
      </header>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-6 py-12" data-oid="307nrva">
        {/* Category & Meta */}
        <div
          className="flex items-center justify-between mb-6 text-sm"
          data-oid="egzx00m"
        >
          <span
            className="font-serif text-gold tracking-wider uppercase"
            data-oid="7e9m89u"
          >
            {articleContent.category}
          </span>
          <span className="font-serif text-navy/50" data-oid="lub4.e6">
            {articleContent.readTime}
          </span>
        </div>

        {/* Title */}
        <h1
          className="font-display text-4xl md:text-5xl font-bold text-navy mb-4 leading-tight"
          data-oid="xh-nh1b"
        >
          {articleContent.title}
        </h1>

        {/* Subtitle */}
        <h2
          className="font-serif text-xl text-navy/70 mb-8 leading-relaxed"
          data-oid="7.49ask"
        >
          {articleContent.subtitle}
        </h2>

        <GeometricDivider data-oid="2v.zzt_" />

        {/* Author Info */}
        <div className="flex items-center gap-4 mb-8" data-oid="shqec-d">
          <div className="relative w-14 h-14" data-oid="bn-62bn">
            <div
              className="absolute inset-0 border-2 border-gold/40"
              data-oid="8onaja5"
            ></div>
            <div
              className="absolute inset-2 bg-navy flex items-center justify-center"
              data-oid="iqoz9i2"
            >
              <span
                className="font-display text-lg font-bold text-gold"
                data-oid="9td6nah"
              >
                {articleContent.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
            <div
              className="absolute -top-1 -left-1 w-2 h-2 border-l-2 border-t-2 border-gold"
              data-oid="5jwn7ug"
            ></div>
            <div
              className="absolute -top-1 -right-1 w-2 h-2 border-r-2 border-t-2 border-gold"
              data-oid="ubxfclb"
            ></div>
          </div>

          <div data-oid="0k8gqez">
            <div
              className="font-display text-base font-semibold text-navy"
              data-oid="ag4le:b"
            >
              {articleContent.author}
            </div>
            <div className="font-serif text-sm text-navy/60" data-oid="9rrug5k">
              {articleContent.authorRole} · {articleContent.date}
            </div>
          </div>
        </div>

        {/* Article Text with Drop Cap */}
        <div className="prose prose-lg max-w-none" data-oid="yf:95z0">
          <div
            className="drop-cap font-serif text-lg text-navy/90 leading-loose space-y-6"
            dangerouslySetInnerHTML={{ __html: getHighlightedContent() }}
            data-oid="ez6ecj:"
          />
        </div>

        {/* Bottom Divider */}
        <div className="mt-12" data-oid="1k-:4:c">
          <GeometricDivider data-oid="x4b0n_w" />
        </div>

        {/* Share & Actions */}
        <div
          className="mt-8 flex items-center justify-center gap-6"
          data-oid="3wp7-:f"
        >
          <button
            className="flex items-center gap-2 px-6 py-3 border border-navy/20 hover:border-gold/60 transition-all bg-cream group"
            data-oid="2cextg4"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              className="text-navy group-hover:text-gold transition-colors"
              data-oid="2wir3su"
            >
              <path
                d="M3 9V15H15V9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-oid="10vs147"
              />

              <path
                d="M9 3V12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                data-oid=":59lgy-"
              />

              <path
                d="M6 6L9 3L12 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-oid="c7:tnmr"
              />
            </svg>
            <span
              className="font-serif text-sm text-navy group-hover:text-gold transition-colors"
              data-oid="77:3r0e"
            >
              Сохранить
            </span>
          </button>

          <button
            className="flex items-center gap-2 px-6 py-3 border border-navy/20 hover:border-gold/60 transition-all bg-cream group"
            data-oid="5jejaox"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              className="text-navy group-hover:text-gold transition-colors"
              data-oid="04q_.4h"
            >
              <path
                d="M13 8L16 11L13 14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-oid="7p0wv43"
              />

              <path
                d="M16 11H9C6.23858 11 4 8.76142 4 6V3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-oid="rki83u8"
              />
            </svg>
            <span
              className="font-serif text-sm text-navy group-hover:text-gold transition-colors"
              data-oid="h5pei0s"
            >
              Поделиться
            </span>
          </button>
        </div>

        {/* Related Articles */}
        <section className="mt-16" data-oid="lcsdo7v">
          <h3
            className="font-display text-2xl font-semibold text-navy text-center mb-8"
            data-oid="dmnfp7k"
          >
            ЧИТАЙТЕ ТАКЖЕ
          </h3>

          <div className="grid gap-4" data-oid="uc01u69">
            <RelatedArticle
              title="Тренды категорийного менеджмента"
              category="Стратегия"
              readTime="10 мин"
              data-oid="ud48dpq"
            />

            <RelatedArticle
              title="Диалог с CEO сети 'Магнит'"
              category="Интервью"
              readTime="18 мин"
              data-oid="7b9d3q9"
            />
          </div>
        </section>
      </article>

      {/* Bottom padding for mobile */}
      <div className="h-20" data-oid="xq4j83s"></div>
    </div>
  );
}

const RelatedArticle = ({
  title,
  category,
  readTime,
}: {
  title: string;
  category: string;
  readTime: string;
}) => (
  <Link href="/article/related" data-oid=":ntzml5">
    <div
      className="flex items-center justify-between p-4 bg-cream border border-navy/10 hover:border-gold/60 transition-all group cursor-pointer"
      data-oid=".4:om0u"
    >
      <div className="flex-1" data-oid="_..9h2e">
        <p className="font-serif text-xs text-gold mb-1" data-oid="5:lbdb.">
          {category}
        </p>
        <h4
          className="font-display text-base font-semibold text-navy group-hover:text-gold transition-colors"
          data-oid="1dub6l2"
        >
          {title}
        </h4>
      </div>
      <div className="flex items-center gap-3" data-oid="n:gn2vp">
        <span className="font-serif text-xs text-navy/50" data-oid="egcc7fu">
          {readTime}
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="text-navy/30 group-hover:text-gold transition-colors"
          data-oid="9a1qg85"
        >
          <path
            d="M6 3L11 8L6 13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            data-oid="nphj1c1"
          />
        </svg>
      </div>
    </div>
  </Link>
);
