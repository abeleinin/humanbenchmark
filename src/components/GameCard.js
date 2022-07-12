function GameCard({ name }) {
  return (
    <div className="bg-white shadow-md px-4 py-16 text-center cursor-pointer rounded-md">
      {name}
    </div>
  );
}

export default GameCard;
