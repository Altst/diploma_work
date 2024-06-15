import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: [
    {
      url: "/logo.png",
      href: "/logo.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <Link
          rel="alternate"
          hrefLang="en"
          href="https://studradaitstep.online"
        ></Link>
        <Link
          rel="alternate"
          hrefLang="uk"
          href="https://uk.studradaitstep.online"
        ></Link>
      </Head>
      <body className={inter.className}>
        {children}
        <Script
          type="text/javascript"
          src="https://cdn.weglot.com/weglot.min.js"
        ></Script>
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              Weglot.initialize({
                api_key: 'wg_daaf5e575158198609087ba0eb6e2f706'
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
