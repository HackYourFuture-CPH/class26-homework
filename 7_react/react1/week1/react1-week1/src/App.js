import "./App.css";

function App() {
  return (
    <div className="App">
      <ToDoList />
    </div>
  );
}

export default App;

const todo = [
  { activity: "Get out of bed", date: "Wed Sep 13 2017" },
  { activity: "Brush teeth", date: "Thu Sep 14 2017" },
  { activity: "Eat breakfast", date: "Fri Sep 15 2017" },
];

function ToDoList() {
  return (
    <div>
      {todo.map((todo) => {
        const activity = todo.activity;
        const date = todo.date;

        return <Print activity={activity} date={date} />;
      })}
    </div>
  );
}

function Print(props) {
  const activity = props.activity;
  const date = props.date;

  return (
    <div>
      <span className="activity-color">{activity} </span> 
      <span className="date-color">{date}</span>
    </div>
  );
}
