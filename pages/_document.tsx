import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <meta
          name="description"
          content="Gym website made by Locofy and editted by Rabii Ghais."
        />
        <meta
          name="keywords"
          content="web development, portfolio, next.js, react, tailwindcss, gym, gym website, workout, trainers, train"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
