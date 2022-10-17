import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import {
  AllCharactersType,
  AllEpisodesType,
  AllLocationsType,
  CharacterType,
} from "../lib/rick-morty/schemas";
import { InputType } from "../lib/rick-morty/schemas/inputs";
import { rmSDK, validateInput } from "../lib/rick-morty/sdk";

const Test: NextPage = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [input, setInput] = useState<InputType>();
  const [singleCharacterInfo, setSingleCharacterInfo] =
    useState<CharacterType>();
  const [characterById, setCharacterById] = useState<string>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.valueAsNumber > 0 && event.target.valueAsNumber <= 826) {
      setIsDisabled(false);
      setInput(event.target.valueAsNumber);
    } else {
      setCharacterById("SIN PERSONAJES");
      setIsDisabled(true);
    }
  };

  const searchInput = () => {
    validateInput(input);
    setCharacterById(singleCharacterInfo?.name);
  };

  useEffect(() => {
    (async () => {
      const responseCharacters = await (
        await fetch("/api/public/characters")
      ).json();
      console.log("responseCharacters", responseCharacters);

      const responseEpisodes = await rmSDK.getAllEpisodes();
      console.log("responseEpisodes", responseEpisodes);

      const responseLocations = await rmSDK.getAllLocations();
      console.log("responseLocations", responseLocations);
    })();
  }, []);

  useEffect(() => {
    if (!input || input > 826) return;
    (async () => {
      const responseSingleCharacter = await rmSDK.getCharacterById(input);
      setSingleCharacterInfo(responseSingleCharacter);
      console.log("responseSingleCharacter", responseSingleCharacter);
    })();
  }, [input]);

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

      <p>BUSCA TU PERSONAJE POR ID 1-826</p>
      <div>
        <input type="number" onChange={handleChange} />
        <button disabled={isDisabled} onClick={searchInput}>
          Buscar
        </button>
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
