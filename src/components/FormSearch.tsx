export default function FormSearch(props: any) {

  function handleSubmit(event: any) {
    event?.preventDefault();
    const formEl = event.currentTarget;
    const formData = new FormData(formEl)
    const playerName = formData.get("player-name")
    props.onSearch(playerName)
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        name="player-name"
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
