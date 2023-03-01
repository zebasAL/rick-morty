import { api } from "./utils/api";

export const rmCharactersUrl = api.public.characters;
export const fetchRmCharacters = async (url: string) => {
  return fetch(url).then((r) => r.json());
};
