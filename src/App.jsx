import "./App.css";
import Counter from "./Counter";
import Batsman from "./Batsman";
import Users from "./Users";
import { Suspense } from "react";

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())



function App() {
  function handleClicked() {
    alert("i am clicked");
  }

  const handleClicked2 = () => {
    alert("clicked 2");
  };

  const addNumber = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };

  return (
    <>
      <h1>Vite + React</h1>
    
    <Suspense fallback={<h3>Loading...</h3>}>
    <Users fetchUsers={fetchUsers}></Users>
    </Suspense>

    <Batsman></Batsman>
    <Counter></Counter>

      <button onClick={handleClicked}>Click me</button>
      <br />
      <br />
      <button onClick={handleClicked2}>Click me 2</button> <br />
      <br />
      <button onClick={() => addNumber(6)}>Add 5</button>
    </>
  );
}

export default App;
