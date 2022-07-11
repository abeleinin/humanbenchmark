function Tile({ id, onClick, flash }) {
  return (
    <div
      id={id}
      onClick={onClick}
      className={`bg-slate-400 rounded-md ${flash ? "brightness-125" : ""}`}
    ></div>
  );
}

export default Tile;
