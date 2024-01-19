import React, { useEffect, useState } from "react";
import { ListItem } from "./ListItem";

export function List() {
  const [list, setList] = useState(initialList);

  useEffect(() => {
    console.log("something");
  }, [list]); // dependency on list changes

  useEffect(() => {
    console.log("hello");
  }, []); // empty dependency array = only when the component mounts;

  const addRandomTask = () => {
    const newTask = {
      id: list.length + 1,
      description: `Random task ${list.length + 1}`,
      done: false,
    };
    setList((previousState) => [...previousState, newTask]);
  };

  const markAsDone = (id) => {
    setList((previousState) =>
      previousState.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteTask = (id) => {
    setList((previousState) => previousState.filter((task) => task.id !== id));
  };

  return (
    <ul>
      <WatchCount />
      <button onClick={addRandomTask}>Add random item</button>
      {list.length === 0 ? (
        <div>No items...</div>
      ) : (
        list.map((listItem) => (
          <ListItem
            key={listItem.id}
            id={listItem.id}
            description={listItem.description}
            done={listItem.done || false}
            markAsDone={markAsDone}
            deleteTask={deleteTask}
          />
        ))
      )}
    </ul>
  );
}

function WatchCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <div>You have used {count} seconds on that website</div>;
}

const initialList = [
  {
    description: "Get out of bed",
    id: 1,
    done: false,
  },
  {
    description: "Brush teeth",
    id: 2,
    done: false,
  },
  {
    description: "Eat breakfast",
    id: 3,
    done: false,
  },
];
