import Head from "next/head";
import type { AppType } from "next/dist/shared/lib/utils";
import { SessionProvider } from "next-auth/react";
import { CacheProvider } from "@emotion/react";
import { ErrorBoundary } from "../utils/ErrorBoundary";
import createEmotionCache from "../utils/createEmotionCache";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import Home from ".";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({
  Component,
  // @ts-expect-error: This is because Next"s AppType is not generic.
  // A fix would be better.
  emotionCache = clientSideEmotionCache,
  // @ts-expect-error.
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  // const MyApp: AppType = ({
  //   // @ts-expect-error: This is because Next"s AppType is not generic.
  //   // A fix would be better.
  //   emotionCache = clientSideEmotionCache,
  //   ...props
  // }) => {
  //   const { Component } = props;
  //   const pagePropsMock: {session: Session} | any = props.pageProps;
  //   const { session } = pagePropsMock;

  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <CacheProvider value={emotionCache}>
      <ErrorBoundary>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </ErrorBoundary>
    </CacheProvider>
  );
}

export default MyApp;
