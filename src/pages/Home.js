import Board from "../components/Board";

function Home() {
  return (
    <Board
      inside={
        <h1 className="p-16 text-[36px] font-bold">
          Welcome to Human Benchmark!
        </h1>
      }
    ></Board>
  );
}

export default Home;
