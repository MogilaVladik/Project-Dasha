import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1A2332",
          color: "#D4AF37",
          fontSize: 20,
          fontWeight: 700,
          fontFamily: "system-ui, sans-serif",
          border: "2px solid #D4AF37",
          borderRadius: 4,
        }}
      >
        Ц
      </div>
    ),
    { ...size }
  );
}
