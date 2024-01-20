import './App.css';
import { useState } from "react";

const toDoLists = [
  {
    id: 1,
    description: "Get out of bed",
    deadline: "Wed Sep 13 2017"
  },
  {
    id: 2,
    description: "Brush Teeth",
    deadline: "Thu Sep 14 2017"
  },
  {
    id: 3,
    description: "Eat Breakfast",
    deadline: "Fri Sep 15 2017"
  }
];

const MyLists = ({ items, check, handleCheck, deleteItem }) => (
  <>
    {items.map((props) => {
      const { id, description, deadline } = props;
      return (
        <li key={id} className={`${check(id)} ${check(id) === "checked-item" ? "checked-item" : ""}`}>
          <input
            type="checkbox"
            onChange={() => handleCheck(id)}
            checked={check(id) === "checked-item"}
          />
          {description} {deadline} <button
                type="button"
                onClick={() => deleteItem(id)}
              >
                Delete
              </button>
        </li>
        
      );
    })}
  </>
);

function App() {
  const [item, setItem] = useState(toDoLists);
  const [checked, setChecked] = useState([]);

  const additem = () => {
    const newTask = {
      id: item.length + 1,
      description: "Do Homework",
      deadline: "Sun Sep 18 2017"
    };

    setItem((previousState) => [...previousState, newTask]);
  };

  const handleCheck = (id) => {
    const updatedList = checked.includes(id) ? checked.filter((item) => item !== id) : [...checked, id];
    setChecked(updatedList);
  };

  const deleteItem = (id) => {
    const updatedItems = item.filter((item) => item.id !== id);
    setItem(updatedItems);
  };

  const isChecked = (id) => checked.includes(id) ? "checked-item" : "not-checked-item";
  return (
    <div className="App">
      <h3>Todo List</h3>
      {item.length === 0 ? (
        <p>No items...</p>
      ) : (
        <ul>
          <MyLists
            check={isChecked}
            handleCheck={handleCheck}
            items={item}
            deleteItem = {deleteItem}
          />
        </ul>
      )}
      <button onClick={additem}> Add new </button>
    </div>
  );
}
export default App;
