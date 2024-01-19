
import './App.css';
import Timer from './components/Timer';

import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Todo list
      </header>
      <div>
        <Timer />
        <ToDoList />
      </div>
    </div>
  );
}

export default App;


