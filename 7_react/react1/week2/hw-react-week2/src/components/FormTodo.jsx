import { useState } from "react";

const FormTodo = (props) => {
  const { handleAddItem } = props;
  const [description, setDescription] = useState("");

  const handleSubmit = (element) => {
    element.preventDefault();

    handleAddItem({
      done: false,
      id: (+new Date()).toString(),
      description,
    });

    setDescription("");
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
          />
          <button
            className="addButtom"
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
