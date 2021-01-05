import "../styles/tailwindcss.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Weather &mdash; Application</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="bg-lightBlue-100 w-screen ">
        <Component {...pageProps} />;
      </div>
    </>
  );
}

export default MyApp;
