import "./App.css";
import TaskListContainer from "./components/TaskListContainer";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <Counter />
      <TaskListContainer />
    </div>
  );
}

export default App;
