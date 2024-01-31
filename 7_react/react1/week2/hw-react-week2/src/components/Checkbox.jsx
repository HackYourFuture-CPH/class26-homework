import '../App.css';

const Checkbox = props => {
  const {
    onChange,
    data: { id, description, done }
  } = props;
  return (
      <label className="newItem">
        <input
          className="toDoState"
          name={id}
          type="checkbox"
          defaultChecked={done}
          onChange={onChange}
        />
        <div className= {done ? "taskDone" : "task"}>{description}</div>
      </label>
  );
};

export default Checkbox;