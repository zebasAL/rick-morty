import { api } from "utils/api";

export const rmCharactersUrl = api.public.characters;
export const rmLocationsUrl = api.public.locations;
export const rmEpisodesUrl = api.public.episodes;

export const fetchRmCharacters = async (url: string) => {
  return fetch(url).then((r) => r.json());
};

export const fetchRmLocations = async (url: string) => {
  return fetch(url).then((r) => r.json());
};

export const fetchRmEpisodes = async (url: string) => {
  return fetch(url).then((r) => r.json());
};
