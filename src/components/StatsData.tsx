interface StatsDataProps {
  img: string;
  profileName: string;
  currentBlitz: string;
  currentRapid: string;
  highestBlitz: string;
  highestRapid: string;
  joined: string;
}

export default function StatsData({
  img,
  profileName,
  currentBlitz,
  currentRapid,
  highestBlitz,
  highestRapid,
  joined,
}: StatsDataProps) {
  return (
    <div className="data-container">
      <h1 className="profile-name">{profileName}</h1>
      <img
        className="profile-image"
        src={
          img == ""
            ? "https://img.icons8.com/?size=512&id=xWVf8MAboaLV&format=png"
            : img
        }
      />
      <div className="ratings">
        <div className="rating-container">
          <p className="title">Blitz</p>
          <p className="rating-description">CURRENT/HIGHEST</p>
          <p className="rating">
            {currentBlitz}/{highestBlitz}
          </p>
        </div>
        <div className="rating-container">
          <p className="title">Rapid</p>
          <p className="rating-description">CURRENT/HIGHEST</p>
          <p className="rating">
            {currentRapid}/{highestRapid}
          </p>
        </div>
      </div>
      <p>
        {"User joined on Chess.com on: " +
          new Date(parseInt(joined) * 1000).toLocaleString()}
      </p>
    </div>
  );
}
