export default function FormSearch() {
  return (
    <form className="search-form">
      <input
        type="text"
        placeholder="CoolChessPlayer123"
        className="form-input"
      />
      <button className="form-button">
        <img src="/src/assets/search-icon.png" className="search-icon" />
      </button>
    </form>
  );
}
