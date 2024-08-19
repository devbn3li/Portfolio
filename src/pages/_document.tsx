import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;900&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="Mohamed Ali - Frontend Engineer with 2+ years Exp" />
        <meta name="author" content="Mohamed Ali" />
        <meta name="keywords" content="Frontend Engineer, Frontend Developer, Next.js, React.js, Tailwind CSS, Web Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#646cff" />
        <link rel="icon" type="image/svg" href="/public/images/Bn3li's_logo.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
