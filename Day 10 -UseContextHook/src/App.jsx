import { useState } from "react";
import Counter from "./components/Counter";
import IncrementButton from "./components/IncrementButton";
import DecrementButton from "./components/DecrementButton";
import countContext from "./context/context";

function App() {
  const [count, setCount] = useState(0);

  return (
    <countContext.Provider value={{count, setCount}}>
      <IncrementButton />
      <Counter/>
      <DecrementButton />
    </countContext.Provider>
  );
}

export default App;
