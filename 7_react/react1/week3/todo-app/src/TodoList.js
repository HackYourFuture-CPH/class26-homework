import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Border from './Border';
import TimeTracker from './TimeTracker';

export function TodoList() {
  const [todos, setTodos] = useState([]);
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState(new Date());

  useEffect(() => {
    fetch(
      'https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw'
    )
      .then((response) => response.json())
      .then((data) =>
        setTodos(
          data.map((todo) => ({ ...todo, completed: false, isEditing: false }))
        )
      );
  }, []);

  const addTodo = () => {
    if (description.trim() === '' || !deadline) {
      alert('Description and Deadline cannot be empty');
      return;
    }
    setTodos([
      ...todos,
      { description, deadline, completed: false, isEditing: false },
    ]);
    setDescription('');
    setDeadline(new Date());
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const updateTodo = (index, updatedTodo) => {
    setTodos(todos.map((todo, i) => (i === index ? updatedTodo : todo)));
  };

  const toggleCompletion = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo();
        }}
      >
        <p>TodoList</p>
        <TimeTracker />
        <div>
          <label htmlFor="todoDescription">Todo description</label>
          <input
            type="text"
            id="todoDescription"
            value={description}
            placeholder="description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="todoDescription">deadline</label>
          <DatePicker
            selected={deadline}
            onChange={(date) => setDeadline(date)}
            placeholderText="dd/mm/yyyy"
          />
        </div>
        <div>
          <button type="submit">Add todo</button>
          {todos.length === 0 && <span>No items</span>}
        </div>
      </form>
      {todos.map((todo, index) => (
        <Border key={index}>
          {todo.isEditing ? (
            <div>
              <input
                type="text"
                value={todo.description}
                onChange={(e) =>
                  updateTodo(index, { ...todo, description: e.target.value })
                }
                onBlur={() => updateTodo(index, { ...todo, isEditing: false })}
                onKeyPress={(event) => {
                  if (event.key === 'Enter') {
                    updateTodo(index, { ...todo, isEditing: false });
                  }
                }}
              />
              <button
                onClick={() => updateTodo(index, { ...todo, isEditing: false })}
              >
                Update
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                  }}
                >
                  {todo.description} - {todo.deadline.toString()}
                </p>
              </div>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleCompletion(index)}
              />
              <button onClick={() => removeTodo(index)}>Delete</button>
              <button
                onClick={() => updateTodo(index, { ...todo, isEditing: true })}
              >
                Edit
              </button>
            </div>
          )}
        </Border>
      ))}
    </div>
  );
}
