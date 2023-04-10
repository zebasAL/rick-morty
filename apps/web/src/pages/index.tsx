import { CharacterType } from "@/lib/rick-morty/schemas";

function Home(props) {
  const { characters } = props;
  return (
    <div className="home-wrap">
      <div className="home-title">
        <h1>Zebas & Richard Rick and Morty API</h1>
      </div>
      {/** intended to be a carrousel*/}
      <div className="home-subtitle">
        <h4 style={{ marginTop: 0 }}>Some of the characters in the show</h4>
        <div className="data-wrap">
          {characters?.map((character: CharacterType) => (
            <div key={character.id} className="data-items">
              {character.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();

  // By returning { props: { characters } }, the Blog component
  // will receive `characters` as a prop at build time
  return {
    props: {
      characters: data.results,
    },
  };
}

export default Home;
