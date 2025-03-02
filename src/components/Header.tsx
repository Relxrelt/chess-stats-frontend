import Toggle from "./Toggle";

export default function Header() {
  return (
    <div className="header-container">
      <h1 className="chess-stats-title">chess stats.</h1>
      <p className="theme-text-header">dark mode?</p>
      <Toggle />
    </div>
  );
}
