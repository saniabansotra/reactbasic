import { useState } from "react";
import DataSaverOnTwoToneIcon from "@mui/icons-material/DataSaverOnTwoTone";

import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

let Counter = () => {
  const [counter, setcounter] = useState(0);
  let level = "LOW";

  if (counter < 10 && counter >= 0) {
    level = "LOW";
  } else if (counter < 20 && counter >= 0) {
    level = "MEDIUM";
  } else if (counter >= 20) {
    level = "HIGH";
  } else {
    level = "NIL";
  }
  return (
    <>
      <div className="profile">
        <h1>{level}</h1>
        <hr />
        <h2>{`Current Count ${counter}`}</h2>
        <button className="btn" onClick={() => setcounter(counter + 1)}>
          Increment
          <DataSaverOnTwoToneIcon />
        </button>
        <button className="btn" onClick={() => setcounter(counter - 1)}>
          Decrement <RemoveCircleIcon />
        </button>
      </div>
    </>
  );
};
export default Counter;
