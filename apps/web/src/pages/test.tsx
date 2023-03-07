import type { NextPage } from "next";
import Head from "next/head";
import { fetchRmCharacters, getKey, rmCharactersUrl } from "../hooks";
import useSWR from "swr";
import useSWRInfinite from "swr/infinite";
import { AllCharactersType } from "../lib/rick-morty/schemas";
import Layout from "../components/Layout";

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

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <>
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
      <button
        onClick={() => {
          setSize(size + 1);
        }}
      >
        Load More
      </button>
    </>
  );
};

export default Test;
