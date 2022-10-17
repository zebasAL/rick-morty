import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { CacheProvider } from "@emotion/react";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { ThemeContextProvider } from "../ThemeContext";
import { ErrorBoundary } from "../ErrorBoundary";
import createEmotionCache from "../utils/createEmotionCache";
import Layout from "../components/Layout";
import "../styles/global.sass";

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

  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <Layout>
      <CacheProvider value={emotionCache}>
        <ErrorBoundary>
          <ThemeContextProvider>
            <SessionProvider session={session}>
              <Component {...pageProps} />
            </SessionProvider>
          </ThemeContextProvider>
        </ErrorBoundary>
      </CacheProvider>
    </Layout>
  );
};

export default MyApp;
