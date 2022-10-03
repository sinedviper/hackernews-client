/* eslint-disable @next/next/no-page-custom-font */
import { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";

import { store } from "../store";

import "../styles/globals.css";

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>HackerNews</title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          property='og:url'
          content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath}
        />
        <meta property='og:locale' content='en_EN' />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
