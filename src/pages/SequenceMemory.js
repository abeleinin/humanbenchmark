import Board from "../components/Board";
import Tile from "../components/Tile";

function SequenceMemory() {
  const idList = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  return (
    <Board
      inside={
        <div className="grid grid-cols-[120px_120px_120px] grid-rows-[120px_120px_120px] gap-4 justify-center pt-14">
          {idList.map((id, i) => (
            <Tile key={i} id={id} onClick={() => console.log(id)}></Tile>
          ))}
        </div>
      }
    />
  );
}

export default SequenceMemory;
