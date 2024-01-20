import TodoItem from "TodoItem/TodoItem"
import "./TodoList.css"


const todoList = [{
    num: 1,
    description: "Get out of bed",
    deadline: "Wed Sep 13 2017"
},
{
    num: 2,
    description: "Brush teeth",
    deadline: "Thu Sep 14 2017"
},
{
    num: 3,
    description: "Eat breakfast",
    deadline: "Fri Sep 15 2017"
}]

function TodoList(){
    const todoItemsComponents = todoList.map(item => (
        <TodoItem key={item.num} description={item.description} deadline={item.deadline}/>
    ))
        function App() {
        const [name,setName] = useState("");
        var myArray = [];
        const handleAdd = () => {
          myArray = [...myArray,name]
          setName("")
        }
        return (
          <div className="App">
            <input placeholder="type a name" onChange={(e) => setName(e.target.value)}/>
            <button onClick={handleAdd}>add</button> 
            <button onClick={() => console.log(myArray)}>test</button>
            {myArray.map((n) => {
              return <h2>{n}</h2> 
            })}
          </div>
        );
      }
      
    return(
        <div>
        <ul className="todoList">
        {todoItemsComponents}
        </ul>
        </div>
    )
}

export default TodoList