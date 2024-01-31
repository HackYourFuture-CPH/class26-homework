// TodoItem.js
import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({ todo, removeTodo, updateTodo }) {
  return (
    <div>
      <p>
        {todo.description} - {todo.deadline}
      </p>
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
      <button
        onClick={() => updateTodo(todo.id, 'New description', 'New deadline')}
      >
        Edit
      </button>
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    deadline: PropTypes.string.isRequired,
  }).isRequired,
  removeTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
};

export default TodoItem;
