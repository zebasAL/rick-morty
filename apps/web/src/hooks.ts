import { api } from "./utils/api";

const page: number = 5;

export const nextPageCharacters = `/api/public/characters?page=${page}`;
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

export const fetchMoreCharacters = async (url: string) => {
  return fetch(url).then((r) => r.json());
};

export const getKey = (pageIndex: any, previousPageData: string | any[]) => {
  if (previousPageData && !previousPageData.length) return null;
  console.log("getKey response", pageIndex, previousPageData);
  return `${rmCharactersUrl}?page=${pageIndex}&limit=10`;
};
