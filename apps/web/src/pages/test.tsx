import type { NextPage } from "next";
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
      {characters?.results.map((character) => (
        <div key={character.id}>
          {character.name}
          {" - " + character.id}
          <div>{character.location?.name}</div>
        </div>
      ))}
    </>
  );
};

export default Test;
