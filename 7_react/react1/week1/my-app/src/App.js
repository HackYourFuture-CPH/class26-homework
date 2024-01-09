
import './App.css';
import ToDoList from './components/ToDoList';
const toDoList = [
  { description: '* Get out of bed', deadline: 'Wed Sep 13 2017' },
  { description: '* Brush teeth', deadline: 'Thu Sep 14 2017' },
  { description: '* Eat breakfast', deadline: 'Fri Sep 15 2017' }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Todo list
      </header>
      <div>
        <ToDoList toDoList={toDoList} />
      </div>
    </div>
  );
}

export default App;
