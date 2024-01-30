// App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import fetchTodos from "./fetchTodos";
import Counter from "./Counter";
import AddTodo from "./AddTodo";
import TodoList from "./ToDoItems";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const todosData = await fetchTodos();
        setTodos(todosData);
      } catch (error) {
        console.error(`Error fetching todos:`, error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Todolist</h1>
      <div className="counter">
      You have used <span style={{ margin: '0 5px' }}><Counter /></span> seconds on this website
      </div>

      <div>
        <AddTodo todos={todos} setTodos={setTodos} />
      </div>

      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
