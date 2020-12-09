import React from "react";
import MainHeader from "../header/MainHeader";
import Head from "next/head";
import FooterDark from "../footer/FooterDark";

export const MainLayout = (props) => {
  const { children, navType } = props;

  return (
    <>
      <Head>
        <html lang="es" />
        <title>Intercorp </title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/img/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/img/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/img/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/static/img/safari-pinned-tab.svg"
          color="#005daa"
        />
        <meta name="msapplication-TileColor" content="#005daa" />
        <meta name="theme-color" content="#ffffff" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&family=Work+Sans:ital,wght@0,400;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <MainHeader type={navType} />
      {children}
      <FooterDark />
    </>
  );
};
