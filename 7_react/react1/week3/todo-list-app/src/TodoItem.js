import React from 'react';

const TodoItem = ({ id, description, deadline, done, toggleDone, deleteTask }) => {
  return (
    <div style={{ textDecoration: done ? 'line-through' : 'none' }}>
      <input type="checkbox" checked={done} onChange={toggleDone} />
      <span>{description} {deadline}</span>
      <button onClick={deleteTask}>Delete</button>
    </div>
  );
};

export default TodoItem;
