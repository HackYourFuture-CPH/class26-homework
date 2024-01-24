import React, { useEffect, useState } from "react";
import ListItem from "./ListItem";
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



export function List() {
  const [list, setList] = useState(initialList);
  const [newTodo, setNewTodo] = useState('');
  const [newDeadline, setNewDeadline] = useState('');


  useEffect(() => {

    fetch('https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw')
      .then(response => response.json())
      .then(data => setList(data))
      .catch(error => console.error('Error fetching todos:', error));
  }, []);

  const addRandomTask = () => {
    
    const newTask = {
      id: Date.now(),
      description: newTodo,
      deadline: newDeadline,
      done: false,
    };

    setList((previousState) => [...previousState, newTask]);
    setNewTodo('');
      setNewDeadline('');
    
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

  const editTask = (id, newDescription) => {
    setList((previousState) =>
      previousState.map((task) =>
        task.id === id ? { ...task, description: newDescription } : task
      )
    );
  };

  return (
  
    <ul>
      <WatchCount />
         <input
          type="text"
          placeholder="Enter new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      
      <ReactDatePicker
          selected={newDeadline}
          onChange={(date) => setNewDeadline(date)}
          placeholderText="Select deadline"
        />
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
            editTask={editTask}
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