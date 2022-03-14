import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&family=Montserrat:wght@100;200;300;400;500;600;700;800&family=Nunito:wght@200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />

          <link rel="shortcut icon" href="/icon.png" type="image/png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}