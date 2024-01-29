import React, { useState, useEffect } from "react";
import "./App.css";

import fetchTodos from "./fetchTodos";
import Counter from "./Counter";
import AddTodo from "./AddTodo";
import EditAndDeleteTodo from "./EditAndDeleteTodo"

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
        {`You have used `}
        <Counter />
         seconds on this website
         
      </div>

      <div>
        <AddTodo todos={todos} setTodos={setTodos} />
      </div>

      <ul>
        {todos.length > 0 ? (
          todos.map((todo) => (
           <EditAndDeleteTodo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>
          ))
        ) : (
          <div>No Items</div>
        )}
      </ul>
    </div>
  );
};

export default App;
