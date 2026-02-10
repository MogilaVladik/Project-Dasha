"use client";

import React, { useId, memo } from "react";

const goldGradientStops = (
  <>
    <stop offset="0%" stopColor="#B8941F" />
    <stop offset="50%" stopColor="#D4AF37" />
    <stop offset="100%" stopColor="#E8C870" />
  </>
);

export const ArtDecoOrnament = memo(function ArtDecoOrnament({
  className = "",
}: {
  className?: string;
}) {
  const id = useId().replace(/:/g, "");
  const gradientId = `goldGradient-${id}`;

  return (
    <div
      className={`flex items-center justify-center ${className}`}
      data-oid="k68m0aq"
    >
      <svg
        width="120"
        height="30"
        viewBox="0 0 120 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path d="M60 5 L65 15 L60 25 L55 15 Z" fill={`url(#${gradientId})`} />
        <path
          d="M45 15 L50 10 L50 20 Z"
          fill={`url(#${gradientId})`}
          opacity="0.8"
        />
        <path
          d="M75 15 L70 10 L70 20 Z"
          fill={`url(#${gradientId})`}
          opacity="0.8"
        />
        <line
          x1="30"
          y1="15"
          x2="42"
          y2="15"
          stroke={`url(#${gradientId})`}
          strokeWidth="1.5"
        />
        <line
          x1="78"
          y1="15"
          x2="90"
          y2="15"
          stroke={`url(#${gradientId})`}
          strokeWidth="1.5"
        />
        <circle cx="30" cy="15" r="2" fill={`url(#${gradientId})`} />
        <circle cx="90" cy="15" r="2" fill={`url(#${gradientId})`} />
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            {goldGradientStops}
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
});

const ROTATIONS: Record<string, string> = {
  "top-left": "0",
  "top-right": "90",
  "bottom-right": "180",
  "bottom-left": "270",
};

export const CornerOrnament = memo(function CornerOrnament({
  position = "top-left",
}: {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}) {
  const id = useId().replace(/:/g, "");
  const gradientId = `cornerGold-${id}`;

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${ROTATIONS[position]}deg)` }}
      aria-hidden
    >
      <path d="M2 2 L8 2 L2 8 Z" fill={`url(#${gradientId})`} />
      <path d="M2 2 L12 2 L2 12 Z" fill={`url(#${gradientId})`} opacity="0.4" />
      <line
        x1="2"
        y1="2"
        x2="16"
        y2="2"
        stroke={`url(#${gradientId})`}
        strokeWidth="1"
      />
      <line
        x1="2"
        y1="2"
        x2="2"
        y2="16"
        stroke={`url(#${gradientId})`}
        strokeWidth="1"
      />
      <defs>
        <linearGradient
          id={gradientId}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#B8941F" />
        </linearGradient>
      </defs>
    </svg>
  );
});

export const GeometricDivider = memo(function GeometricDivider() {
  const id = useId().replace(/:/g, "");
  const gradientId = `dividerGold-${id}`;

  return (
    <div className="relative flex items-center justify-center my-8" data-oid="n4q.:.z">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />
      </div>
      <div className="relative bg-ivory px-4">
        <svg
          width="40"
          height="8"
          viewBox="0 0 40 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path d="M20 0 L24 4 L20 8 L16 4 Z" fill={`url(#${gradientId})`} />
          <path
            d="M8 4 L12 4"
            stroke={`url(#${gradientId})`}
            strokeWidth="1.5"
          />
          <path
            d="M28 4 L32 4"
            stroke={`url(#${gradientId})`}
            strokeWidth="1.5"
          />
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#B8941F" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#B8941F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
});
