import History from "./History";
import StatsData from "./StatsData";

export default function MainContent() {
  return (
    <div className="container">
      <div className="main-content">
        <History />
        <StatsData />
      </div>
    </div>
  );
}
