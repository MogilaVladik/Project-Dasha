"use client";

import React, { memo } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NAV_ITEMS = [
  { href: "/", label: "Главная", icon: HomeIcon },
  { href: "/archive", label: "Архив", icon: ArchiveIcon },
  { href: "/podcasts", label: "Подкасты", icon: PodcastIcon },
  { href: "/authors", label: "Авторы", icon: AuthorsIcon },
] as const;

export const BottomNav = memo(function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 bg-navy border-t border-gold/30 safe-area-inset-bottom"
      data-oid="yg:2ot-"
    >
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="flex justify-around items-center px-2 py-2">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center px-4 py-2 min-w-[64px] transition-colors ${
                isActive ? "text-gold" : "text-ivory/60 hover:text-ivory"
              }`}
            >
              <Icon />
              <span className="font-serif text-xs mt-1 tracking-wide">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
});

function HomeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M3 12L12 3L21 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 10V20H9V14H15V20H19V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArchiveIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M3 9H21" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M9 14H15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PodcastIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <path
        d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function AuthorsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle
        cx="12"
        cy="8"
        r="4"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M4 20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
