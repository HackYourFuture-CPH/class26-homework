import React, { useState } from "react";

const EditAndDeleteTodo = ({ todo, todos, setTodos }) => {
  const [description, setDescription] = useState(todo.description);
  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDelete = () => {
    setTodos(todos.filter((e) => e.id !== todo.id));
  };

  const handleUpdate = () => {
    setTodos((prevTodos) =>
      prevTodos.map((t) =>
        t.id === todo.id ? { ...t, description: description } : t
      )
    );
    setEditMode(false);
  };

  return (
    <li key={todo.id} className="list-item">
      <input type="checkbox" id={todo.id} />

      {editMode ? (
        <input type="text" value={description} onChange={handleChange} />
      ) : (
        <label htmlFor={todo.id} className="strikethrough">
          {todo.description} | {todo.deadline}
        </label>
      )}

      <button onClick={handleDelete}>Delete</button>

      {editMode ? (
        <button onClick={handleUpdate}>Update</button>
      ) : (
        <button onClick={() => setEditMode(true)}>Edit</button>
      )}
    </li>
  );
};

export default EditAndDeleteTodo;
