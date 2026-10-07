import { useState } from "react";

interface squareProps {
  value: string;
  onSquareClick: () => void;
}

//useState<Iitem[]>
function Square({ value, onSquareClick }: squareProps) {
  // const [value, setValue] = useState<string>();
  // const handleClick = () => {
  //   setValue("X");
  // };

  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;
