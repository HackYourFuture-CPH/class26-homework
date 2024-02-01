import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todo, onRemove, onUpdate }) => {
  const [isEditing, setEditing] = useState(false);
  const [updatedDescription, setUpdatedDescription] = useState(todo.description);
  const [updatedDeadline, setUpdatedDeadline] = useState(todo.deadline);

  const handleUpdate = () => {
    onUpdate(todo.id, updatedDescription, updatedDeadline);
    setEditing(false);
  };

  return (
    <div style={{ border: '1px solid black', padding: '8px', margin: '8px', borderRadius: '4px' }}>
      {!isEditing ? (
        <>
          <div>
            <strong>Description:</strong> {todo.description}
          </div>
          <div>
            <strong>Deadline:</strong> {todo.deadline}
          </div>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => onRemove(todo.id)}>Remove</button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
            placeholder="Enter description"
          />
          <input
            type="date"
            value={updatedDeadline}
            onChange={(e) => setUpdatedDeadline(e.target.value)}
          />
          <button onClick={handleUpdate}>Update</button>
          <button onClick={() => setEditing(false)}>Cancel</button>
        </>
      )}
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    deadline: PropTypes.string.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

const Border = ({ children }) => (
  <div style={{ border: '2px solid black', padding: '16px', borderRadius: '8px' }}>
    {children}
  </div>
);

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newDescription, setNewDescription] = useState('');
  const [newDeadline, setNewDeadline] = useState('');

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw')
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  const handleAddTodo = () => {
    if (newDescription.trim() !== '' && newDeadline !== '') {
      const newTodo = {
        id: todos.length + 1,
        description: newDescription,
        deadline: newDeadline,
      };

      setTodos([...todos, newTodo]);
      setNewDescription('');
      setNewDeadline('');
    }
  };

  const handleRemoveTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleUpdateTodo = (id, updatedDescription, updatedDeadline) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, description: updatedDescription, deadline: updatedDeadline }
          : todo
      )
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <Border>
        <div>
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            placeholder="Enter description"
          />
          <input
            type="date"
            value={newDeadline}
            onChange={(e) => setNewDeadline(e.target.value)}
          />
          <button onClick={handleAddTodo}>Add Todo</button>
        </div>
        <div>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onRemove={handleRemoveTodo}
              onUpdate={handleUpdateTodo}
            />
          ))}
        </div>
      </Border>
    </div>
  );
};

export default App;
