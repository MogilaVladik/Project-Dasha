"use client";

import React, { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

export const SearchBar = ({
  placeholder = "Поиск по статьям и подкастам...",
  onSearch,
  className = "",
}: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative ${className}`}
      data-oid="r2ffio9"
    >
      <div className="relative group" data-oid="xs_xc2s">
        {/* Art Deco border frame */}
        <div
          className="absolute -inset-px bg-gradient-to-r from-gold-dark via-gold to-gold-dark opacity-40 group-focus-within:opacity-100 transition-opacity"
          data-oid="gl.occf"
        ></div>

        <div className="relative bg-ivory flex items-center" data-oid="69lu8va">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="w-full px-4 py-3 bg-transparent font-serif text-navy placeholder-navy/40 focus:outline-none text-base"
            data-oid=".0a5uh5"
          />

          <button
            type="submit"
            className="px-4 py-3 text-gold hover:text-gold-light transition-colors"
            aria-label="Поиск"
            data-oid="ot932bv"
          >
            <SearchIcon data-oid="_wyhtx3" />
          </button>
        </div>
      </div>
    </form>
  );
};

const SearchIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-oid="w1m5tjt"
  >
    <circle
      cx="8"
      cy="8"
      r="6"
      stroke="currentColor"
      strokeWidth="1.5"
      data-oid="9ep_9sl"
    />
    <path
      d="M12.5 12.5L17 17"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      data-oid="xf64d-7"
    />
  </svg>
);
