import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
// import { rmSDK, validateInput } from "../lib/rick-morty/sdk";
import { api } from '../utils/api'

const Test: NextPage = () => {
  const [response, setResponse] = useState<any>()

  const fetchData = async () => {
    if (response) return
    const res = await fetch(api.public.characters, { method: 'GET' })
      .then((res) => res)
      .then((res) => res.json())
    setResponse(res)
  };

  fetchData()

  return (
    <>
      <Head>
        <title>Test</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      {response && (
        <pre>
          {JSON.stringify(response, null, 2)}
        </pre>
      )}
    </>
  );
};

export default Test;
