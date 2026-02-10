import React from "react";

export const ArtDecoOrnament = ({ className = "" }: { className?: string }) => {
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
        data-oid="ndll8fx"
      >
        {/* Center diamond */}
        <path
          d="M60 5 L65 15 L60 25 L55 15 Z"
          fill="url(#goldGradient)"
          data-oid="apr2o9p"
        />

        {/* Side stepped forms */}
        <path
          d="M45 15 L50 10 L50 20 Z"
          fill="url(#goldGradient)"
          opacity="0.8"
          data-oid="cc3g.-e"
        />

        <path
          d="M75 15 L70 10 L70 20 Z"
          fill="url(#goldGradient)"
          opacity="0.8"
          data-oid="pc5t9g3"
        />

        {/* Outer lines */}
        <line
          x1="30"
          y1="15"
          x2="42"
          y2="15"
          stroke="url(#goldGradient)"
          strokeWidth="1.5"
          data-oid="ffluic7"
        />

        <line
          x1="78"
          y1="15"
          x2="90"
          y2="15"
          stroke="url(#goldGradient)"
          strokeWidth="1.5"
          data-oid="vpr7q-r"
        />

        {/* Small corner details */}
        <circle
          cx="30"
          cy="15"
          r="2"
          fill="url(#goldGradient)"
          data-oid="0kjwa8z"
        />

        <circle
          cx="90"
          cy="15"
          r="2"
          fill="url(#goldGradient)"
          data-oid="r4ods9r"
        />

        <defs data-oid="x12o_ic">
          <linearGradient
            id="goldGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
            data-oid="xprm65z"
          >
            <stop offset="0%" stopColor="#B8941F" data-oid="my:exuw" />
            <stop offset="50%" stopColor="#D4AF37" data-oid="ycwf:cg" />
            <stop offset="100%" stopColor="#E8C870" data-oid="sjs_4do" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export const CornerOrnament = ({
  position = "top-left",
}: {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}) => {
  const rotations = {
    "top-left": "0",
    "top-right": "90",
    "bottom-right": "180",
    "bottom-left": "270",
  };

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotations[position]}deg)` }}
      data-oid="a7.emko"
    >
      <path d="M2 2 L8 2 L2 8 Z" fill="url(#cornerGold)" data-oid="a5wltn4" />
      <path
        d="M2 2 L12 2 L2 12 Z"
        fill="url(#cornerGold)"
        opacity="0.4"
        data-oid="qyvb:ny"
      />

      <line
        x1="2"
        y1="2"
        x2="16"
        y2="2"
        stroke="url(#cornerGold)"
        strokeWidth="1"
        data-oid="nh_52cj"
      />

      <line
        x1="2"
        y1="2"
        x2="2"
        y2="16"
        stroke="url(#cornerGold)"
        strokeWidth="1"
        data-oid="9rrpg:5"
      />

      <defs data-oid="e0-z0oj">
        <linearGradient
          id="cornerGold"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
          data-oid="bb44v:l"
        >
          <stop offset="0%" stopColor="#D4AF37" data-oid="bfya.18" />
          <stop offset="100%" stopColor="#B8941F" data-oid="8ye9p9l" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const GeometricDivider = () => {
  return (
    <div
      className="relative flex items-center justify-center my-8"
      data-oid="n4q.:.z"
    >
      <div className="absolute inset-0 flex items-center" data-oid="8cj1e5n">
        <div
          className="w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-60"
          data-oid="hi:i1ln"
        ></div>
      </div>
      <div className="relative bg-ivory px-4" data-oid="d3.63fj">
        <svg
          width="40"
          height="8"
          viewBox="0 0 40 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-oid="z2cbqex"
        >
          <path
            d="M20 0 L24 4 L20 8 L16 4 Z"
            fill="url(#dividerGold)"
            data-oid="9_e97hr"
          />

          <path
            d="M8 4 L12 4"
            stroke="url(#dividerGold)"
            strokeWidth="1.5"
            data-oid="df5h0aw"
          />

          <path
            d="M28 4 L32 4"
            stroke="url(#dividerGold)"
            strokeWidth="1.5"
            data-oid="ur6vzd:"
          />

          <defs data-oid="kpj:8h2">
            <linearGradient
              id="dividerGold"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
              data-oid="obm_ot-"
            >
              <stop offset="0%" stopColor="#B8941F" data-oid="i:j7me9" />
              <stop offset="50%" stopColor="#D4AF37" data-oid="he1hpj0" />
              <stop offset="100%" stopColor="#B8941F" data-oid="7gktx13" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};
