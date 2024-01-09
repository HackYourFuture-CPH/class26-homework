import './App.css';


function MyLists(props){
    const description= props.description;
    const deadline= props.deadline;
  return(
    <ul>
    <li>{description}, {deadline}</li>
    </ul>
  );
}

function App() {
  return (
        <div className= "App">
          <h3>Todo List</h3>
          <MyLists description= "Get out of bed" deadline= "Wed Sep 13 2017"/>
          <MyLists description= "Brush Teeth" deadline= "Thu Sep 14 2017"/>
          <MyLists description= "Eat Breakfast" deadline= "Fri Sep 15 2017"/>
          </div>
  );
}

export default App;
