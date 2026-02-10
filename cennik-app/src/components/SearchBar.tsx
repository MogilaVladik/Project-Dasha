"use client";

import React, { useState, useCallback, memo } from "react";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

function SearchIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
    >
      <circle
        cx="8"
        cy="8"
        r="6"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M12.5 12.5L17 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export const SearchBar = memo(function SearchBar({
  placeholder = "Поиск по статьям и подкастам...",
  onSearch,
  className = "",
}: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      onSearch?.(query);
    },
    [query, onSearch]
  );

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`} data-oid="r2ffio9">
      <div className="relative group">
        <div className="absolute -inset-px bg-gradient-to-r from-gold-dark via-gold to-gold-dark opacity-40 group-focus-within:opacity-100 transition-opacity" />
        <div className="relative bg-ivory flex items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="w-full px-4 py-3 bg-transparent font-serif text-navy placeholder-navy/40 focus:outline-none text-base"
            aria-label="Поиск"
          />
          <button
            type="submit"
            className="px-4 py-3 text-gold hover:text-gold-light transition-colors"
            aria-label="Найти"
          >
            <SearchIcon />
          </button>
        </div>
      </div>
    </form>
  );
});
