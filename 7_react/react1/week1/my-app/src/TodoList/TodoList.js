import TodoItem from "../TodoItem/TodoItem"
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

    return(
        <div>
        <li className="todoList">
        {todoItemsComponents}
        </li>
        </div>
    )
}

export default TodoList