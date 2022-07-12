import Board from "../components/Board";
import GameCard from "../components/GameCard";

function Home() {
  return (
    <div className="h-screen">
      <Board
        inside={
          <h1 className="p-16 text-[36px] font-bold">
            Welcome to Human Benchmark!
          </h1>
        }
      />
      <div className="grid grid-cols-[300px_300px_300px] gap-4 px-32 pt-4 justify-center">
        <GameCard name="Sequence Memory" />
        <GameCard name="Typing Speed" />
        <GameCard name="Digit Span" />
      </div>
    </div>
  );
}

export default Home;
