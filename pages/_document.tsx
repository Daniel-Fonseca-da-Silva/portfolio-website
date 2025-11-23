import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A systems architect with more than 10 years of experience turning complex challenges into scalable, high-impact solutions." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Daniel Fonseca da Silva" />
        <meta property="og:description" content="A systems architect with more than 10 years of experience turning complex challenges into scalable, high-impact solutions." />
        <meta property="og:image" content="/assets/images/open-graph-daniel.png" />
        <meta property="og:url" content="https://www.daniel-fonseca.online/" />
        <meta property="og:site_name" content="Daniel Fonseca da Silva - Portfolio" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Daniel Fonseca da Silva" />
        <meta name="twitter:description" content="A systems architect with more than 10 years of experience turning complex challenges into scalable, high-impact solutions." />
        <meta name="twitter:image" content="/assets/images/open-graph-daniel.png" />
        
        <link rel="icon" href="/assets/images/logo.png" />
        <link rel="shortcut icon" href="/assets/images/logo.png" />
        <link rel="apple-touch-icon" href="/assets/images/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
