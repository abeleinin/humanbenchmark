import Tile from "./Tile";

function SequenceMemory() {
  const idList = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  return (
    <div className="grid grid-cols-[150px_150px_150px] grid-rows-[150px_150px_150px] gap-4 justify-center">
      {idList.map((id, i) => (
        <Tile key={i} id={id} onClick={() => console.log(id)}></Tile>
      ))}
    </div>
  );
}

export default SequenceMemory;
