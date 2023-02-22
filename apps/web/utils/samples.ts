export async function getSamples() {
  const res = await fetch(`https://rickandmortyapi.com/api/character`);
  const data = await res.json();

  return data;
}

export function postSamples() {}
