import './App.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { useState, useEffect } from "react";

const MyLists = ({ items, check, handleCheck, deleteItem, children }) => (
  <>
    {items.map((props) => {
      const { id, description, deadline } = props;
      return (
        <li key={id} className={`${check(id)} ${check(id) === "checked-item" ? "checked-item" : ""}`}>
          <div className="border">
      {children}
          <input
            type="checkbox"
            onChange={() => handleCheck(id)}
            checked={check(id) === "checked-item"}
          />
{description} - Deadline: {deadline ? new Date(deadline).toLocaleDateString() : 'No deadline'}
          <button
            type="button"
            onClick={() => deleteItem(id)}
          >
            Delete
          </button>
          
    </div>
        </li>
      );
    })}

</>
);

function App() {
  const [item, setItem] = useState([]);
  const [checked, setChecked] = useState([]);
  const [value, setValue] = useState("");
  const [deadline, setDeadline] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  // const [date, setDate] = useState(new Date());

  useEffect(() => {
    fetch("https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setItem(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  const additem = () => {
    if (!value || !deadline) {
      setError("Please enter both description and deadline");
      return;
    }

    const newTask = {
      id: item.length + 1,
      description: value,
      deadline: deadline,
    };

    setItem((previousState) => [...previousState, newTask]);
    setValue("");
    setDeadline(null);
    setError("");
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
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div>
            <input type="text" placeholder="Task description" value={value} onChange={(e) => setValue(e.target.value)} />
            <DatePicker
              selected={deadline}
              onChange={(date) => setDeadline(date)} // Use date object
              placeholderText="dd/MM/yyyy"
              dateFormat="dd/MM/yyyy" // Example date format
            />
            <button onClick={additem}>Add new</button>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {item.length === 0 ? (
            <p>No items...</p>
          ) : (
            <ul>
              <MyLists
                check={isChecked}
                handleCheck={handleCheck}
                items={item}
                deleteItem={deleteItem}
              />
            </ul>
          )}
        </>
      )}
    </div>
  );
}

export default App;