import { useState } from "react";

const Content = () => {
  const [counter, setcounter] = useState(5); //let ccounter=0;
  // setcounter(1)            //ccounter=counter++

  // }
  return (
    <>
      <h1>The Current count is {counter}</h1>
      <button
        style={{ backgroundColor: "white", color: "black" }}
        onClick={() => setcounter(counter + 1)}
      >
        Increment
      </button>
      <button
        style={{ backgroundColor: "white", color: "black" }}
        onClick={() => setcounter(counter - 1)}
      >
        Decrement
      </button>
    </>
  );
};
export default Content;
