import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import React from "react";

import { Favicons } from "../utils/favicons";
import { PWAHead } from "../utils/pwa";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-GB">
        <Head>
          <meta
            name="description"
            content="A timer used for RNG manipulation in Pokémon games"
          />
          <Favicons />
          <PWAHead />
          <link
            href="https://unpkg.com/@primer/css@^19.0.0/dist/primer.css"
            rel="stylesheet"
          />
          <script id="theme" src="theme.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
