import React, { useState } from "react";

const ControlledInput = (props) => {
  const [todo, setTodo] = useState("");
  const [deadline, setDeadline] = useState("");

  const onChangeTodo = (e) => {
    setTodo(e.target.value);
  };

  const onChangeDeadline = (e) => {
    setDeadline(e.target.value);
  };

  return (
    <div>
      Todo description:
      <input
        type="text"
        value={todo}
        onChange={onChangeTodo}
      />
      <br /> 
      Deadline:
      <input
        type="text"
        value={deadline}
        onChange={onChangeDeadline}
      />
    </div>
  );
};

export default ControlledInput;
