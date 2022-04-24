import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import React from "react";

import { Favicons } from "../utils/favicons";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-GB">
        <Head>
          {/* This is the default <head> for all pages across the website. */}
          <link
            href="https://unpkg.com/@primer/css@^19.0.0/dist/primer.css"
            rel="stylesheet"
          />
          <script id="theme" src="theme.js" />
          <Favicons />
          {/* This meta should be put in the Head for each page as it will not be the
              same, whereas the two above are the same for all pages */}
          <meta
            name="description"
            content="A timer used for RNG manipulation in Pokémon games"
          />
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
