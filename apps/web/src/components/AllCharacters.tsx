import useSWR from "swr";
import { AllCharactersType } from "../lib/rick-morty/schemas";
import { fetchRmCharacters, rmCharactersUrl } from "../hooks/hooks";

export default function AllCharacters() {
  const {
    data: characters,
    error,
    isLoading,
  } = useSWR<AllCharactersType>(rmCharactersUrl, fetchRmCharacters);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div className="data-wrap">
      {characters?.results.map((character) => (
        <div key={character.id} className="data-items">
          {character.name}
        </div>
      ))}
    </div>
  );
}
