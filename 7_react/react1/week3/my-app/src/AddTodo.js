import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddTodo = ({ todos, setTodos }) => {
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const onChangeDeadline = (e) => {
    setDeadline(e.target.value);
  };

  return (
    <div>
      Todo description:
      <input type="text" value={description} onChange={onChangeDescription} />
      <br />
      Deadline:
      <input type="date" value={deadline} onChange={onChangeDeadline} />
      <button
        onClick={() =>
          setTodos([
            ...todos,
            {
              id: uuidv4(),
              description: description,
              deadline: deadline, 
            },
          ])
        }
      >
        Add todo
      </button>
    </div>
  );
};

export default AddTodo;
