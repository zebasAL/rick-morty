import type { NextPage } from "next";
import Head from "next/head";
import { fetchRmCharacters, fetchRmEpisodes, fetchRmLocations, rmCharactersUrl, rmEpisodesUrl, rmLocationsUrl } from "../hooks";
import useSWR from "swr";
import { AllCharactersType, AllLocationsType, AllEpisodesType } from "../lib/rick-morty/schemas";

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
      <table>
        <th>Name</th>
        <th>Id</th>
        <th>Location</th>
        {characters?.results.map((character) => (
          <tr key={character.id}>
            {character.name}
        <td>{character.id}</td>
        <td>{character.location?.name}</td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default Test;
