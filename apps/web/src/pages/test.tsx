import type { NextPage } from "next";
import Head from "next/head";
// import { rmSDK, validateInput } from "../lib/rick-morty/sdk";

import { api } from '../utils/api'


const Test: NextPage = () => {

  const fetchData = async () => {
    return await fetch(api.public.characters, { method: 'POST' })
  };

  console.log('fetch', fetchData())

  return (
    <>
      <Head>
        <title>Test</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <pre>
        {JSON.stringify('TEXT')}
      </pre>
    </>
  );
};

export default Test;
