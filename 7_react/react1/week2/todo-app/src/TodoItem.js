// TodoItem.js
import React from 'react';

function TodoItem({ todo, toggleDone, deleteTodo }) {
  return (
    <li style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
      {todo.description}
      <input type="checkbox" checked={todo.done} onChange={() => toggleDone(todo.id)} />
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;