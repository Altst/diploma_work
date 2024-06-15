"use client";

import { useEffect } from "react";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Объявляем глобальную переменную Weglot
declare global {
  interface Window {
    Weglot: any;
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    if (typeof window.Weglot !== "undefined") {
      window.Weglot.initialize({
        api_key: "wg_daaf5e575158198609087ba0eb6e2f706",
      });
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <link
          rel="alternate"
          hrefLang="en"
          href="https://studradaitstep.online"
        />
        <link
          rel="alternate"
          hrefLang="uk"
          href="https://uk.studradaitstep.online"
        />
      </head>
      <body className={inter.className}>
        {children}
        <Script
          src="https://cdn.weglot.com/weglot.min.js"
          strategy="afterInteractive"
        />
        <Script id="weglot-init" strategy="afterInteractive">
          {`
            if (typeof Weglot !== 'undefined') {
              Weglot.initialize({
                api_key: 'wg_07cf8d2497c52ad03db0999f314651b81',
              });
            }
          `}
        </Script>
      </body>
    </html>
  );
}
