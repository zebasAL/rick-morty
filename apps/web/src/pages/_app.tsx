// src/pages/_app.tsx
import Head from "next/head";
import type { AppType } from "next/dist/shared/lib/utils";
import { SessionProvider } from "next-auth/react";
import { CacheProvider } from "@emotion/react";
import { ErrorBoundary } from "../utils/ErrorBoundary";
import createEmotionCache from "../utils/createEmotionCache";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const MyApp: AppType = ({
  Component,
  // @ts-expect-error: This is because Next"s AppType is not generic.
  // A fix would be better.
  emotionCache = clientSideEmotionCache,
  // @ts-expect-error.
  pageProps: { session, ...pageProps },
}) => {

  // const MyApp: AppType = ({
  //   // @ts-expect-error: This is because Next"s AppType is not generic.
  //   // A fix would be better.
  //   emotionCache = clientSideEmotionCache,
  //   ...props
  // }) => {
  //   const { Component } = props;
  //   const pagePropsMock: {session: Session} | any = props.pageProps;
  //   const { session } = pagePropsMock;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ErrorBoundary>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </ErrorBoundary>
    </CacheProvider>
  );
};

export default MyApp;