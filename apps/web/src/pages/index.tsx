import AllCharacters from "@/components/AllCharacters";

export default function Home() {
  return (
    <div className="home-wrap">
      <div className="home-title">
        <h1>Zebas & Richard Rick and Morty API</h1>
      </div>
      {/** intended to be a carrousel*/}
      <div className="home-subtitle">
        <h4 style={{ marginTop: 0 }}>Some of the characters in the show</h4>
        <AllCharacters />
      </div>
    </div>
  );
}
