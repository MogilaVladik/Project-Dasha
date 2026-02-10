import type { Metadata } from "next";
import Script from "next/script";
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
    <html lang="ru" data-oid="2897v5c">
      <head data-oid="fgi-ood">
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          data-oid="-5dhxa5"
        />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
          data-oid="320:k2j"
        />
      </head>
      <body className="antialiased" data-oid="4kbwn3u">
        {children}

        <Script
          src="https://cdn.jsdelivr.net/gh/onlook-dev/onlook@d3887f2/apps/web/client/public/onlook-preload-script.js"
          strategy="afterInteractive"
          type="module"
          id="onlook-preload-script"
          data-oid="4ahvk9c"
        ></Script>
      </body>
    </html>
  );
}
