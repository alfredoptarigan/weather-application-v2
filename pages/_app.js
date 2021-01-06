import React, { useState, useEffect } from "react";

import "../styles/tailwindcss.css";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    return () => {};
  }, []);
  return (
    <>
      <Head>
        <title>All In One</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta
          name="description"
          content="Weather Application for Final Project Rekayasa Perangkat Lunak"
        />
        <meta
          name="keywords"
          content="weather weather-alfredo weather-labd3ti"
        />

        <link rel="manifest" href="/dunplab-manifest-29805" />
        <link
          href="/favicon-16x16-dunplab-manifest-29805.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/favicon-32x32-dunplab-manifest-29805.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon-57x57-dunplab-manifest-29805.png"
        ></link>
        <meta name="theme-color" content="#2196f3" />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="bg-lightBlue-100 w-screen min-h-screen ">
        <Component {...pageProps} />;
      </div>
    </>
  );
}

export default MyApp;
