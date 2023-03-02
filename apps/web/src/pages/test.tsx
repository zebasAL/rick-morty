import type { NextPage } from "next";
import Head from "next/head";
import {
  fetchRmCharacters,
  fetchRmEpisodes,
  fetchRmLocations,
  getKey,
  rmCharactersUrl,
  rmEpisodesUrl,
  rmLocationsUrl,
} from "../hooks";
import useSWR from "swr";
import useSWRInfinite from "swr/infinite";
import {
  AllCharactersType,
  AllLocationsType,
  AllEpisodesType,
  CharacterType,
} from "../lib/rick-morty/schemas";

const Test: NextPage = () => {
  const {
    data: characters,
    error,
    isLoading,
  } = useSWR<AllCharactersType>(rmCharactersUrl, fetchRmCharacters);

  const {
    data: nextFetch,
    size,
    setSize,
  } = useSWRInfinite(getKey, fetchRmCharacters);

  const moreCharacters: AllCharactersType = nextFetch?.[0];

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
        <thead>
          <tr>
            <th>Name</th>
            <th>Id</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {characters?.results.map((character) => (
            <tr key={character.id}>
              <th>{character.name}</th>
              <td>{character.id}</td>
              <td> {character.location?.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {moreCharacters?.results.map((incomingFetch: CharacterType) => {
        // `nextFetch?` is an array of each page's API response.
        return <div key={incomingFetch.id}>{incomingFetch.name}</div>;
      })}
      <button
        onClick={() => {
          setSize(size + 1);
          console.log("myNextFetch", nextFetch?.[0].results);
        }}
      >
        Load More
      </button>
    </>
  );
};

export default Test;
