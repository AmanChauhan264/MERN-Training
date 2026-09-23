import { useCallback } from "react";
import { useEffect, useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(10);

  const square = useMemo(() => {
    console.log("code is running");
    return count * count;
    console.log("NOTHING IS THERE");
  }, [count]);

const handleclick = useCallback(()=>{
  console.log("code is running");  
});

  // useEffect(() => {
  //   console.log("xyz");
  // }, [count]);
  return (
    <>
      <p>Hello</p>
      <p>VARIABLE {count}</p>
      <p>SQUARE {square}</p>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button onClick={handleClick}>click here</button>
    </>
  );
}

export default App;