import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <script src="https://unpkg.com/pdf-lib@1.4.0"></script>
        <script src="https://unpkg.com/@pdf-lib/fontkit@0.0.4"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
