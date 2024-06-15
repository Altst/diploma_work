import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
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
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          type="text/javascript"
          src="https://cdn.weglot.com/weglot.min.js"
          async
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              Weglot.initialize({
                api_key: 'wg_daaf5e575158198609087ba0eb6e2f706'
              });
            `,
          }}
        />
      </body>
    </Html>
  );
}
