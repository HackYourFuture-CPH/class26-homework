import './App.css';

function App() {
  return (
    <div className="React App">
      <ToDoList />
    </div>
  );
}

export default App;

const todo = [
  { activity: 'Get out of bed', date: 'Wed Sep 13 2017' },
  { activity: 'Brush teeth', date: 'Thu Sep 14 2017' },
  { activity: 'Eat breakfast', date: 'Fri Sep 15 2017' },
];


function ToDoList() {
  return (
    <div>
      {todo.map((todo) => {
        const date = todo.date;
        const activity = todo.activity;
        return <ToDoItem date={date} activity={activity} />;

      })}
    </div>
  );
}

function ToDoItem(props) {
  return (
    <div>{props.date} {props.activity}</div>
  );
}

