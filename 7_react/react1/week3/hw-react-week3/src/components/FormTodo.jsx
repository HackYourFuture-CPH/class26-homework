import { useState } from "react";

const FormTodo = (props) => {
  const { handleAddItem } = props;
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (element) => {
    element.preventDefault();

    handleAddItem({
      done: false,
      id: (+new Date()).toString(),
      description,
      dueDate, 
    });

    setDescription("");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="todoList">
        <div className="taskInput">
          <input
            type="text"
            className="textInput"
            value={description}
            onChange={(element) => setDescription(element.target.value)}
            placeholder="Task description"
          />
          <input
            type="date"
            className="dateInput"
            value={dueDate}
            onChange={(element) => setDueDate(element.target.value)}
          />
          <button
            className="addButton"
            disabled={description ? "" : "disabled"}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormTodo;
