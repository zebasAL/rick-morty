import { rmSDK } from "../../../lib/rick-morty/sdk";

export async function getStaticPaths() {
  const paths = await rmSDK.getAllCharacters();
  return {
    paths,
    fallback: false,
  };
}
