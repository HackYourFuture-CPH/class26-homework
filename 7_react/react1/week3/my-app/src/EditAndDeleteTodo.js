import React, { useState } from "react";
//rafce

const EditAndDeleteTodo = ({ todo, todos, setTodos }) => {
  const [description, setDescription] = useState(todo.description);
  const [editMode, setEditMode] = useState(false);
  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  return (
    <li key={todo.id} className="list-item">
      <input type="checkbox" id={todo.id} />
      {editMode ? (
        <input type="text" value={description} onChange={onChangeDescription} />
      ) : (
        <>
          <label htmlFor={todo.id} className="strikethrough">
            {todo.description} | {todo.deadline}
          </label>
        </>
      )}
      <button
        onClick={() => {
          setTodos(todos.filter((e) => e.id !== todo.id));
        }}
      >
        Delete
      </button>
      {editMode ? (
        <button
          onClick={() => {
            const updatedTodoElementIndex = todos.findIndex(
              (e) => e.id === todo.id
            );
            let newArray = [...todos];
            newArray[updatedTodoElementIndex] = {
              id: todo.id,
              description: description,
              deadline: todo.deadline,
            };
            setTodos([...newArray]);
            setEditMode(false);
          }}
        >
          Update
        </button>
      ) : (
        <button
          onClick={() => {
            setEditMode(true);
          }}
        >
          Edit
        </button>
      )}
    </li>
  );
};

export default EditAndDeleteTodo;
