import "./App.css";
import Container from "./components/Container";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <Counter />
      <Container />
    </div>
  );
}

export default App;