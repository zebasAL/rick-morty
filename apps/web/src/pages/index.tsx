import CountdownTimer from "@/components/countdown/CountdownTimer";
import { rmCharactersUrl } from "@/hooks/hooks";
import useLocalStorage from "@/hooks/useLocalStorage";
import { AllCharactersType, CharacterType } from "@/lib/rick-morty/schemas";
import { useState, useEffect } from "react";
interface HomeProps {
  characters: AllCharactersType;
}

function Home(props: HomeProps) {
  const { characters } = props;
  const [randomNumber, setRandomNumber] = useState<number>(0);
  const [storedCharacter, setStoredCharacter] = useState<string>("");

  const [targetDate, setTargetDate] = useLocalStorage("targetDate", null);
  const [dyingCharacter, setDyingCharacter] = useLocalStorage(
    "dyingCharacter",
    null
  );

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * 19);
    setRandomNumber(randomNum);
    setStoredCharacter(dyingCharacter);
  }, [dyingCharacter]);

  const handleCountdownFinished = () => {
    const newTargetDate = new Date().getTime() + 5 * 24 * 60 * 60 * 1000;
    setTargetDate(newTargetDate);
    const newDyingCharacter = characters.results[randomNumber].name;
    setDyingCharacter(newDyingCharacter);
  };

  return (
    <div className="home-wrap">
      <div className="home-title">
        <h1>Zebas & Richard Rick and Morty API</h1>
      </div>
      {/** intended to be a carrousel*/}
      <div className="home-subtitle">
        <h4 style={{ marginTop: 0 }}>Some of the characters in the show</h4>
        <div className="data-wrap">
          {characters.results?.map((character: CharacterType) => (
            <div key={character.id} className="data-items">
              {character.name}
            </div>
          ))}
        </div>
      </div>
      <div className="countdown-title">
        Time left for <span>{storedCharacter}</span> to die:
      </div>
      <CountdownTimer
        targetDate={targetDate}
        onCountdownFinished={handleCountdownFinished}
        character={dyingCharacter}
      />
      <br />
    </div>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(rmCharactersUrl);
  const data = await res.json();

  // By returning { props: { characters } }, the Blog component
  // will receive `characters` as a prop at build time
  return {
    props: {
      characters: data,
    },
  };
}

export default Home;
