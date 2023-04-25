import { rmSDK } from "lib/rick-morty/sdk";

export async function getStaticPaths() {
  const paths = await rmSDK.getNextAllCharacters(2);
  return {
    paths,
    fallback: false,
  };
}
