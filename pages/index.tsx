import { useState } from "react";

function Home() {
  const [counter, setCounter] = useState(1);

  const increaseCounter = () => {
    setCounter((prev) => prev + 1);
  }

  return (
    <div>
      <h1>Hello World {counter}</h1>
      <button onClick={increaseCounter}>+</button>
    </div>
  );
}

export default Home;
