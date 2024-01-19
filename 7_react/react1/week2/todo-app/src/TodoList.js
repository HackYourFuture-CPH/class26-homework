// TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleDone, deleteTodo }) {
  return (
    <ul>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleDone={toggleDone} deleteTodo={deleteTodo} />
        ))
      ) : (
        <p>No items...</p>
      )}
    </ul>
  );
}

export default TodoList;