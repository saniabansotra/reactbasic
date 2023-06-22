import { useState } from "react";

const Content = () => {
  const [counter, setcounter] = useState(0);

  // }
  return (
    <>
      <h1>The Current count is {counter}</h1>
      <button onClick={() => setcounter(counter + 1)}>INCREMENT</button>
      <button id="but" onClick={() => setcounter(counter - 1)}>
        DECREMENT
      </button>
    </>
  );
};
export default Content;
