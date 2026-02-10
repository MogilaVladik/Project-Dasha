"use client";

import React, { memo } from "react";
import { CornerOrnament } from "./ArtDecoOrnament";

interface ArtDecoCardProps {
  children: React.ReactNode;
  className?: string;
  showCorners?: boolean;
  variant?: "default" | "elevated" | "bordered";
}

const VARIANT_CLASSES = {
  default: "bg-ivory border border-gold/20",
  elevated: "bg-cream border-2 border-gold/40 shadow-lg",
  bordered: "bg-ivory border-2 border-navy/80",
} as const;

export const ArtDecoCard = memo(function ArtDecoCard({
  children,
  className = "",
  showCorners = true,
  variant = "default",
}: ArtDecoCardProps) {
  return (
    <div
      className={`relative ${VARIANT_CLASSES[variant]} ${className}`}
      data-oid=":2ynj7j"
    >
      {showCorners && (
        <>
          <div className="absolute top-0 left-0">
            <CornerOrnament position="top-left" />
          </div>
          <div className="absolute top-0 right-0">
            <CornerOrnament position="top-right" />
          </div>
          <div className="absolute bottom-0 left-0">
            <CornerOrnament position="bottom-left" />
          </div>
          <div className="absolute bottom-0 right-0">
            <CornerOrnament position="bottom-right" />
          </div>
        </>
      )}
      <div className="relative p-6" data-oid="de6oxpj">
        {children}
      </div>
    </div>
  );
});
