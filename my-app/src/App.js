
import './App.css';

const DateFormatter = ({ date }) => {
  const formattedDate = new Date(date).toDateString();
  return <span>{formattedDate}</span>;
};

const ToDoItem = ({description, deadline}) => {
  return (
    <li>
      <span>{description}, </span>
      <DateFormatter date={deadline}/>
    </li>
  );
};

const ToDoList = () => {
  const todoItems = [
    {description: 'Get out of bed', deadline: 'Wed Sep 13 2017'},
    {description: 'Brush teeth', deadline: 'Thu Sep 14 2017'},
    {description: 'Eat breakfast', deadline: 'Fri Sep 15 2017'},
  ];
  return (
    <div>
      <h2>To Do List</h2>
      <ul>
        {todoItems.map((item, index)=> (
          <ToDoItem key={index} {...item} />
        ))}
      </ul>
    </div>
  );
};

function App() {
  return (
    <ToDoList />
  );
};

export default App;
