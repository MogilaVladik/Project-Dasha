"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const BottomNav = () => {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Главная", icon: HomeIcon },
    { href: "/archive", label: "Архив", icon: ArchiveIcon },
    { href: "/podcasts", label: "Подкасты", icon: PodcastIcon },
    { href: "/authors", label: "Авторы", icon: AuthorsIcon },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 bg-navy border-t border-gold/30 safe-area-inset-bottom"
      data-oid="yg:2ot-"
    >
      {/* Top gold accent line */}
      <div
        className="h-px bg-gradient-to-r from-transparent via-gold to-transparent"
        data-oid="-403fyz"
      ></div>

      <div
        className="flex justify-around items-center px-2 py-2"
        data-oid="8yyx6kj"
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center px-4 py-2 min-w-[64px] transition-colors ${
                isActive ? "text-gold" : "text-ivory/60 hover:text-ivory"
              }`}
              data-oid="leq6cbh"
            >
              <Icon data-oid="-mndl68" />
              <span
                className="font-serif text-xs mt-1 tracking-wide"
                data-oid="1jffd1p"
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

const HomeIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-oid="wcz-xa1"
  >
    <path
      d="M3 12L12 3L21 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      data-oid="49rqbsp"
    />
    <path
      d="M5 10V20H9V14H15V20H19V10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      data-oid="w6ueh70"
    />
  </svg>
);

const ArchiveIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-oid=":vae9l5"
  >
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      stroke="currentColor"
      strokeWidth="1.5"
      data-oid="gtffp.k"
    />
    <path
      d="M3 9H21"
      stroke="currentColor"
      strokeWidth="1.5"
      data-oid="n25:edl"
    />
    <path
      d="M9 14H15"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      data-oid="wsuk.hp"
    />
  </svg>
);

const PodcastIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-oid="-w2_8lc"
  >
    <circle cx="12" cy="12" r="2" fill="currentColor" data-oid="ph2rqll" />
    <path
      d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
      stroke="currentColor"
      strokeWidth="1.5"
      data-oid="n3vv1fj"
    />
    <path
      d="M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12Z"
      stroke="currentColor"
      strokeWidth="1.5"
      data-oid="3.qkqkv"
    />
  </svg>
);

const AuthorsIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-oid=".1.txq_"
  >
    <circle
      cx="12"
      cy="8"
      r="4"
      stroke="currentColor"
      strokeWidth="1.5"
      data-oid="gvf.k01"
    />
    <path
      d="M4 20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      data-oid="_9eqtzf"
    />
  </svg>
);
