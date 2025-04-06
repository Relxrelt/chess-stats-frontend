import Favorites from "./Favorites";
import StatsData from "./StatsData";

export default function MainContent({ playerData }: { playerData: any }) {
  return (
    <div className="container">
      <div className="main-content">
        <Favorites />
        <StatsData
          img={playerData.img}
          profileName={playerData.name}
          currentBlitz={playerData.blitzRating}
          currentRapid={playerData.rapidRating}
          highestBlitz={playerData.highestBlitzRating}
          highestRapid={playerData.highestRapidRating}
          joined={playerData.joined}
        />
      </div>
    </div>
  );
}
