import Toggle from "./Toggle";
import FormSearch from "./FormSearch";
export default function Header() {
  return (
    <div className="header-container">
      <h1 className="chess-stats-title">chess stats.</h1>
      <FormSearch />
      <p className="theme-text-header">dark mode?</p>
      <Toggle />
    </div>
  );
}
