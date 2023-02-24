import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import {
  AllCharactersType,
  AllEpisodesType,
  AllLocationsType,
} from "../lib/rick-morty/schemas";
import { InputType } from "../lib/rick-morty/schemas/inputs";
import { rmSDK, validateInput } from "../lib/rick-morty/sdk";

const Test: NextPage = () => {
  const [input, setInput] = useState<InputType>(1);
  const [allCharacters, setAllCharacters] = useState<AllCharactersType>();
  const [allEpisodes, setAllEpisodes] = useState<AllEpisodesType>();
  const [allLocations, setAllLocations] = useState<AllLocationsType>();
  const [characterById, setCharacterById] = useState<string | undefined>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.valueAsNumber);
  };

  const searchInput = () => {
    validateInput(input);
    if (input > 0 && input < 20) {
      setCharacterById(allCharacters?.results?.[input].name);
      return;
    } else setCharacterById("No se encontraron personajes");
  };

  useEffect(() => {
    (async () => {
      const responseCharacters = await rmSDK.getAllCharacters();
      setAllCharacters(responseCharacters);
      console.log("responseCharacters", responseCharacters);

      const responseEpisodes = await rmSDK.getAllEpisodes();
      setAllEpisodes(responseEpisodes);
      console.log("responseEpisodes", responseEpisodes);

      const responseLocations = await rmSDK.getAllLocations();
      setAllLocations(responseLocations);
      console.log("responseLocations", responseLocations);
    })();
  }, []);

  return (
    <>
      <Head>
        <title>Test</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?   
          family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <p>BUSCA TU PERSONAJE POR ID 1-19</p>
      <div>
        <input
          type="number"
          min="1"
          max="19"
          value={input}
          onChange={handleChange}
        />
        <button onClick={searchInput}>Buscar</button>
      </div>
      <div>
        <text>
          El personaje es: <br />
          <h2>{characterById}</h2>
        </text>
      </div>
    </>
  );
};

export default Test;
