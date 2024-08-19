import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;900&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="Frontend Engineer Portfolio - Elevate your website or learn How with my expertise in Next, React, JavaScript and TypeScript, Let&#x27;s collaborate!" />
        <meta name="author" content="Mohamed Ali" />
        <meta name="keywords" content="Frontend Engineer, Frontend Developer, Next.js, React.js, Tailwind CSS, Web Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#646cff" />
        <link rel="icon" type="image/svg" href="/images/Bn3li's_logo.svg" />
        <meta property="og:site_name" content="Mohamed Ali - Frontend Engineer"></meta>
        <meta property="og:title" content="Mohamed Ali - Frontend Engineer" />
        <meta property="og:description" content="Frontend Engineer Portfolio - Elevate your website or learn How with my expertise in Next, React, JavaScript and TypeScript, Let&#x27;s collaborate!" />
        <meta property="og:image" content="/images/Bn3li's_logo.svg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://www.devbn3li.tech" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Myrtis Beaverdam | Front End Developer" />
        <meta name="twitter:description" content="Frontend Engineer Portfolio - Elevate your website or learn How with my expertise in Next, React, JavaScript and TypeScript, Let&#x27;s collaborate!" />
        <meta name="twitter:image" content="/images/Bn3li's_logo.svg" />
    </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
