import type { Metadata } from "next";
import Script from "next/script";
import { playfair, cormorant } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ценник — Ритейл Медиа",
  description:
    "Ежеквартальное издание для поставщиков и вендоров розничной индустрии",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ru"
      className={`${playfair.variable} ${cormorant.variable}`}
      data-oid="2897v5c"
    >
      <body className="antialiased font-serif" data-oid="4kbwn3u">
        {children}
        <Script
          src="https://cdn.jsdelivr.net/gh/onlook-dev/onlook@d3887f2/apps/web/client/public/onlook-preload-script.js"
          strategy="afterInteractive"
          type="module"
          id="onlook-preload-script"
          data-oid="4ahvk9c"
        />
      </body>
    </html>
  );
}
