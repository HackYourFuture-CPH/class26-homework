import React, { useState, useEffect } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

const todos = [
  {
    id: 1,
    description: "Get out of bed",
  },
  {
    id: 2,
    description: "Brush teeth",
  },
  {
    id: 3,
    description: "Eat breakfast",
  },
];

export default function App() {
  const [list, setList] = useState(todos);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Todolist</h1>
      <p>You have used {counter} seconds on this website</p>
      <button
        onClick={() =>
          setList([...list, { id: uuidv4(), description: "random text" }])
        }
      >
        Add todo
      </button>
      <ul>
      {list.length > 0 ? (
        list.map((listItem) => {
          return (
            <li key={listItem.id} className="list-item">
              <input type="checkbox" id={listItem.id} />
              <label for={listItem.id} className="strikethrough">
                {listItem.description}
              </label>
              <button
                onClick={() => {
                  setList(list.filter((e) => e.id !== listItem.id));
                }}
              >
                Delete
              </button>
            </li>
          );
        })
      ) : (
        <div> No Items </div>
      )}
      </ul>
    </div>
  );
}
