import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { keepTheme } from "./themes";
import { useEffect } from "react";
import { useState } from "react";

export default function App() {
  const [playerData, setPlayerData] = useState(null);
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    keepTheme();
    const fetchInitialPlayer = async () => {
      const data = await getPlayer("Magnuscarlsen");
      setPlayerData(data);
    };

    fetchInitialPlayer();
  }, []);

  async function getPlayer(playerName: string) {
    const response = await fetch(
      "http://localhost:8080/playerdata?username=" + playerName,
      { method: "GET" }
    );
    const data = await response.json();
    console.log(data);
    return data;
  }

  async function onSearch(playerName: string) {
    setPlayerData(await getPlayer(playerName));
  }

  return (
    <>
      <Header onSearch={onSearch} />
      {playerData ? (
        <MainContent playerData={playerData} />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
