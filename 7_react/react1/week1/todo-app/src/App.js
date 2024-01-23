
import './App.css';
 
export default function App (){

 return (
  <div>
    <h1>To Do List</h1>
    <List/>
  </div>
 )
};

//list component
 function List() {
  const listItems = todoList.map(todo =>
    <li>{todo.description} {todo.deadline} </li>
  );
  return <ul>{listItems}</ul>;
}

const todoList = ([
{ description: 'Get out of bed', deadline: 'Wed Sep 13 2017' },
{ description: 'Brush teeth', deadline: 'Thu Sep 14 2017' },
{ description: 'Eat breakfast', deadline: 'Fri Sep 15 2017' },
]);
