import "../App.css";

const Checkbox = ({ onChange, data: { id, description, done } }) => {
  return (
      <label className="newItem">
        <input
          className="toDoState"
          name={id}
          type="checkbox"
          defaultChecked={done}
          onChange={onChange}
        />
        <div className={done ? "taskDone" : "task"}>{description}</div>
      </label>
  );
};

export default Checkbox;
