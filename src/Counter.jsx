import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

    const handleCount =()=>{
        let newCount =count+1;
        setCount(newCount);
    }

  const counterStyle = {
    border: "2px solid tomato",
    borderRadius: '20px',
    marginBottom: "20px",
    padding: "10px",
  };
  return (
    <div style = {counterStyle}>
      <h3>Count : {count}</h3>
      <button onClick={handleCount}>Add</button>
    </div>
  );
}
