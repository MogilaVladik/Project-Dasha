"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArtDecoOrnament } from "@/components/ArtDecoOrnament";
import { BottomNav } from "@/components/BottomNav";

const archiveIssues = [
  {
    id: 12,
    year: 2025,
    quarter: "Q1",
    title: "Будущее поставок в цифровую эру",
    theme: "navy",
  },
  {
    id: 11,
    year: 2024,
    quarter: "Q4",
    title: "Итоги года: ритейл в цифрах",
    theme: "black",
  },
  {
    id: 10,
    year: 2024,
    quarter: "Q3",
    title: "Экологичность и устойчивость",
    theme: "navy",
  },
  {
    id: 9,
    year: 2024,
    quarter: "Q2",
    title: "Новые технологии логистики",
    theme: "black",
  },
  {
    id: 8,
    year: 2024,
    quarter: "Q1",
    title: "Омниканальная торговля",
    theme: "navy",
  },
  {
    id: 7,
    year: 2023,
    quarter: "Q4",
    title: "Тренды маркетплейсов",
    theme: "black",
  },
  {
    id: 6,
    year: 2023,
    quarter: "Q3",
    title: "Автоматизация складов",
    theme: "navy",
  },
  {
    id: 5,
    year: 2023,
    quarter: "Q2",
    title: "Категорийный менеджмент",
    theme: "black",
  },
  {
    id: 4,
    year: 2023,
    quarter: "Q1",
    title: "Стратегии ценообразования",
    theme: "navy",
  },
  {
    id: 3,
    year: 2022,
    quarter: "Q4",
    title: "Цифровая трансформация",
    theme: "black",
  },
  {
    id: 2,
    year: 2022,
    quarter: "Q3",
    title: "Работа с данными",
    theme: "navy",
  },
  { id: 1, year: 2022, quarter: "Q2", title: "Первый выпуск", theme: "black" },
];

export default function ArchivePage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="min-h-screen bg-ivory pb-24" data-oid="h0n7wdg">
      {/* Header */}
      <header
        className="bg-navy pt-8 pb-6 px-6 border-b-2 border-gold/40"
        data-oid="hmmt3pi"
      >
        <div className="max-w-4xl mx-auto" data-oid="91c-n-:">
          <ArtDecoOrnament className="mb-4" data-oid="bripj35" />
          <h1
            className="font-display text-3xl font-bold tracking-luxury text-center mb-2"
            data-oid="_dh2ej5"
          >
            <span className="gold-gradient-text" data-oid="1eak8i3">
              АРХИВ ИЗДАНИЙ
            </span>
          </h1>
          <p
            className="font-serif text-ivory/80 text-center text-sm tracking-wide"
            data-oid="4zmeico"
          >
            Все выпуски журнала с 2022 года
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-8" data-oid="6ysy-qm">
        {/* View Toggle */}
        <div className="flex justify-end mb-6" data-oid="o4np8zt">
          <div
            className="inline-flex border border-navy/20 bg-cream"
            data-oid="f0w8q8u"
          >
            <button
              onClick={() => setViewMode("grid")}
              className={`px-4 py-2 font-serif text-sm transition-colors ${
                viewMode === "grid"
                  ? "bg-navy text-ivory"
                  : "text-navy hover:bg-navy/5"
              }`}
              data-oid="7wzdidf"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="inline mr-2"
                data-oid="wg.u29:"
              >
                <rect
                  x="1"
                  y="1"
                  width="6"
                  height="6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  data-oid="d-:114."
                />
                <rect
                  x="9"
                  y="1"
                  width="6"
                  height="6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  data-oid="of0yt1h"
                />
                <rect
                  x="1"
                  y="9"
                  width="6"
                  height="6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  data-oid="m36ddit"
                />
                <rect
                  x="9"
                  y="9"
                  width="6"
                  height="6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  data-oid="d0x7_w7"
                />
              </svg>
              Сетка
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`px-4 py-2 font-serif text-sm transition-colors ${
                viewMode === "list"
                  ? "bg-navy text-ivory"
                  : "text-navy hover:bg-navy/5"
              }`}
              data-oid="j8-wlut"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="inline mr-2"
                data-oid="f-m7ddl"
              >
                <line
                  x1="1"
                  y1="3"
                  x2="15"
                  y2="3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  data-oid="7_t7kw_"
                />
                <line
                  x1="1"
                  y1="8"
                  x2="15"
                  y2="8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  data-oid="o_8tuq2"
                />
                <line
                  x1="1"
                  y1="13"
                  x2="15"
                  y2="13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  data-oid=".tyhse6"
                />
              </svg>
              Список
            </button>
          </div>
        </div>

        {/* Issues Display */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-2 gap-4" data-oid="33fpeks">
            {archiveIssues.map((issue) => (
              <IssueCoverCard key={issue.id} issue={issue} data-oid="a8f0kqo" />
            ))}
          </div>
        ) : (
          <div className="space-y-3" data-oid="h.bhe6q">
            {archiveIssues.map((issue) => (
              <IssueListItem key={issue.id} issue={issue} data-oid="z5rkt-y" />
            ))}
          </div>
        )}
      </div>

      <BottomNav data-oid="x_2iup7" />
    </div>
  );
}

// Grid View Component
const IssueCoverCard = ({ issue }: { issue: (typeof archiveIssues)[0] }) => {
  const bgColor =
    issue.theme === "navy"
      ? "from-navy via-navy to-black"
      : "from-black via-black to-navy";

  return (
    <Link href={`/article/${issue.id}`} data-oid="x8x:ih6">
      <div className="group cursor-pointer" data-oid="kay2wtj">
        <div
          className={`aspect-[3/4] bg-gradient-to-br ${bgColor} flex flex-col items-center justify-center p-4 text-center border-2 border-gold/30 hover:border-gold transition-all relative overflow-hidden`}
          data-oid="qq9:40y"
        >
          {/* Decorative corner elements */}
          <div
            className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-gold/50"
            data-oid="32wmahb"
          ></div>
          <div
            className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-gold/50"
            data-oid="6pdz2ky"
          ></div>
          <div
            className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-gold/50"
            data-oid="y6elh6f"
          ></div>
          <div
            className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-gold/50"
            data-oid="zi-ky4q"
          ></div>

          <div className="space-y-3 relative z-10" data-oid="3o:rcl2">
            <div
              className="font-display text-2xl font-bold tracking-luxury text-gold"
              data-oid="scqi3ni"
            >
              ЦЕННИК
            </div>
            <div
              className="h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"
              data-oid="jw7r._5"
            ></div>
            <div
              className="font-serif text-ivory text-sm leading-relaxed px-2"
              data-oid="i8ax4wb"
            >
              {issue.title}
            </div>
            <div
              className="h-px w-12 bg-gold/40 mx-auto"
              data-oid="k5g-qe5"
            ></div>
            <div
              className="font-serif text-gold-light text-xs tracking-wide"
              data-oid="k:pfcou"
            >
              {issue.quarter} {issue.year} · #{issue.id}
            </div>
          </div>
        </div>
        <p
          className="font-serif text-xs text-navy/60 text-center mt-2 group-hover:text-gold transition-colors"
          data-oid="wggvtma"
        >
          Выпуск {issue.id}
        </p>
      </div>
    </Link>
  );
};

// List View Component
const IssueListItem = ({ issue }: { issue: (typeof archiveIssues)[0] }) => {
  return (
    <Link href={`/article/${issue.id}`} data-oid=":rp4gw_">
      <div
        className="flex items-center gap-4 p-4 bg-cream border border-navy/10 hover:border-gold/60 transition-all cursor-pointer group"
        data-oid="-hgoaas"
      >
        {/* Mini cover */}
        <div
          className={`w-16 h-20 flex-shrink-0 bg-gradient-to-br ${issue.theme === "navy" ? "from-navy to-black" : "from-black to-navy"} flex items-center justify-center border border-gold/30`}
          data-oid="nr1854-"
        >
          <span className="font-display text-gold text-xs" data-oid="xv1qkku">
            #{issue.id}
          </span>
        </div>

        <div className="flex-1 min-w-0" data-oid="75km26x">
          <div className="flex items-baseline gap-2 mb-1" data-oid="rcnqs3q">
            <span className="font-serif text-xs text-gold" data-oid="ukf54n:">
              {issue.quarter} {issue.year}
            </span>
            <span
              className="font-serif text-xs text-navy/40"
              data-oid="usfwrh:"
            >
              •
            </span>
            <span
              className="font-serif text-xs text-navy/60"
              data-oid="ee-4gam"
            >
              Выпуск {issue.id}
            </span>
          </div>
          <h3
            className="font-display text-base font-semibold text-navy group-hover:text-gold transition-colors"
            data-oid="jc1rogt"
          >
            {issue.title}
          </h3>
        </div>

        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="text-navy/30 group-hover:text-gold transition-colors flex-shrink-0"
          data-oid="tdhrt8t"
        >
          <path
            d="M7 4L13 10L7 16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            data-oid="kc4i1du"
          />
        </svg>
      </div>
    </Link>
  );
};
