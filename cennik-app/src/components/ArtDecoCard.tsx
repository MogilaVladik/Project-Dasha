import React from "react";
import { CornerOrnament } from "./ArtDecoOrnament";

interface ArtDecoCardProps {
  children: React.ReactNode;
  className?: string;
  showCorners?: boolean;
  variant?: "default" | "elevated" | "bordered";
}

export const ArtDecoCard = ({
  children,
  className = "",
  showCorners = true,
  variant = "default",
}: ArtDecoCardProps) => {
  const variants = {
    default: "bg-ivory border border-gold/20",
    elevated: "bg-cream border-2 border-gold/40 shadow-lg",
    bordered: "bg-ivory border-2 border-navy/80",
  };

  return (
    <div
      className={`relative ${variants[variant]} ${className}`}
      data-oid=":2ynj7j"
    >
      {showCorners && (
        <>
          <div className="absolute top-0 left-0" data-oid="de8zmki">
            <CornerOrnament position="top-left" data-oid="962tpnw" />
          </div>
          <div className="absolute top-0 right-0" data-oid="g4w:0id">
            <CornerOrnament position="top-right" data-oid="j_eor3t" />
          </div>
          <div className="absolute bottom-0 left-0" data-oid="iv_u4-t">
            <CornerOrnament position="bottom-left" data-oid="8znd94_" />
          </div>
          <div className="absolute bottom-0 right-0" data-oid="b3_hp5:">
            <CornerOrnament position="bottom-right" data-oid="rvxrh_d" />
          </div>
        </>
      )}
      <div className="relative p-6" data-oid="de6oxpj">
        {children}
      </div>
    </div>
  );
};
