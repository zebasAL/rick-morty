import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { rmSDK } from '../lib/rick-morty/sdk'

 const Test: NextPage = () => {
  
  useEffect(() => {
    (async() => {
      const response = await rmSDK.getAllCharacters()
      console.log('response', response)
    })()

  }, [])

  return (
    <>
      <Head>
        <title>Test</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?   family=Montserrat:wght@200;400&display=swap" rel="stylesheet" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <p>HOLA AMIGOS</p>
    </>
  )
}

export default Test;
