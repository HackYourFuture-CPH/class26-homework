import React from "react";
import ControlledInput from "./ControlledInput";
import Counter from "./Counter";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import DataFetching from "./DataFetching";

function App() {
  return (
    <div className="App">
      <h1>Todolist</h1>
      <p>You have used <Counter /> seconds</p>
      <ControlledInput />
      <DataFetching />
    </div>
  );
}

export default App;
