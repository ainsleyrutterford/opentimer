import React from "react";

export const Favicons = () => (
  <>
    <link
      rel="shortcut icon"
      href={`/${process.env.NEXT_PUBLIC_REPO_NAME}/favicons/favicon.ico`}
    />
    <link
      rel="icon"
      sizes="16x16 32x32 64x64"
      href={`/${process.env.NEXT_PUBLIC_REPO_NAME}/favicons/favicon.ico`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="196x196"
      href={`/${process.env.NEXT_PUBLIC_REPO_NAME}/favicons/favicon-192.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="160x160"
      href={`/${process.env.NEXT_PUBLIC_REPO_NAME}/favicons/favicon-160.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="96x96"
      href={`/${process.env.NEXT_PUBLIC_REPO_NAME}/favicons/favicon-96.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="64x64"
      href={`/${process.env.NEXT_PUBLIC_REPO_NAME}/favicons/favicon-64.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href={`/${process.env.NEXT_PUBLIC_REPO_NAME}/favicons/favicon-32.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href={`/${process.env.NEXT_PUBLIC_REPO_NAME}/favicons/favicon-16.png`}
    />
    <meta name="msapplication-TileColor" content="#FFFFFF" />
    <meta
      name="msapplication-TileImage"
      content={`/${process.env.NEXT_PUBLIC_REPO_NAME}/favicons/favicon-144.png`}
    />
    <meta
      name="msapplication-config"
      content={`/${process.env.NEXT_PUBLIC_REPO_NAME}/browserconfig.xml`}
    />
  </>
);
