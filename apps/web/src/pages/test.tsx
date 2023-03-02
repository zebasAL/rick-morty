import type { NextPage } from "next";
import Head from "next/head";
import { fetchRmCharacters, rmCharactersUrl } from "../hooks";
import useSWR from "swr";
import { AllCharactersType } from "../lib/rick-morty/schemas";

const Test: NextPage = () => {
  const {
    data: characters,
    error,
    isLoading,
  } = useSWR<AllCharactersType>(rmCharactersUrl, fetchRmCharacters);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <>
      <Head>
        <title>Test</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      {characters && <pre>{JSON.stringify(characters, null, 2)}</pre>}
      <div>
        {characters?.results.map((character) => (
          <div key={character.id}>{character.name}</div>
        ))}
      </div>
    </>
  );
};

export default Test;
