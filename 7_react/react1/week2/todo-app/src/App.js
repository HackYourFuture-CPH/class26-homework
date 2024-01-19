// App.js
import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, description: 'Get out of bed', done: false },
    { id: 2, description: 'Brush teeth', done: false },
    { id: 3, description: 'Eat breakfast', done: false },
    
  ]);


  const addRandomTodo = () => {
    const id = todos.length + 1;
    const description = `Random todo ${id}`;
    setTodos([...todos, { id, description, done: false }]);
  };

  const toggleDone = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <button onClick={addRandomTodo}>Add random todo</button>
      <TodoList todos={todos} toggleDone={toggleDone} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;