function Tile({ id, onClick, flash }) {
  return (
    <div
      id={id}
      onClick={onClick}
      className={`bg-[#000066] opacity-[.15] rounded-md cursor-pointer ${
        flash ? "brightness-125" : ""
      }`}
    ></div>
  );
}

export default Tile;
