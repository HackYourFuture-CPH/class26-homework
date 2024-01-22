
import './App.css';
import { useState } from 'react';

const toDos = [
  { id: 1, description: 'Get out of bed', done: false },
  { id: 2, description: 'Brush teeth', done: false },
  { id: 3, description: 'Eat breakfast', done: false },
];

const TodoList = () => {
  const [todos, setTodos] = useState(toDos);
  const [newTodoId, setNewTodoId] = useState(4); 

  const addRandomTodo = () => {
    const randomDescription = `Random Task ${newTodoId}`;
    const newTodo = { id: newTodoId, description: randomDescription, done: false };
    setTodos([...todos, newTodo]);
    setNewTodoId(newTodoId + 1);
  };

  const toggleDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h2>Todo List</h2>
      {todos.length === 0 ? (
        <p>No items...</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleDone(todo.id)}
              />
              {todo.description}
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={addRandomTodo}>Add Random Todo</button>
    </div>
  );
};

export default TodoList;
