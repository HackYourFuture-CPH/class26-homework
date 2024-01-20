import TodoItem from "../TodoItem/TodoItem"
import "./TodoList.css"
import React, { useEffect, useState } from "react"


const defaultTodoList = [{
    id: new Date().getTime() + 1,
    description: "Get out of bed",
    deadline: "Wed Sep 13 2017",
    done: false
},
{
    id: new Date().getTime() + 2,
    description: "Brush teeth",
    deadline: "Thu Sep 14 2017",
    done: false

},
{
    id: new Date().getTime() + 3,
    description: "Eat breakfast",
    deadline: "Fri Sep 15 2017",
    done: false
}]

function TodoList() {
    const [todoList, setTodoList] = useState(defaultTodoList);
    const [timer, setTimer] = useState(0);

    const updateTime = () => {
       setTimer((prev) => {
            return prev+1;
       })
    }
  
    useEffect(() => {
        const interval = setInterval(() => updateTime(), 1000);

        return () => clearInterval(interval);  
    }, [])

    const addNewTask = () => {
        const newRandomTask = {
            id: new Date().getTime(),
            description: 'Random task',
            deadline: 'Wednesday Oct 12 2024',
            done: false,
        }

        const newTodoList = [...todoList, newRandomTask]

        setTodoList(newTodoList)
    }

    const updateToDoItem = (id) => {
        const todoItem = todoList.find((item) => item.id === id)

        todoItem.done = !todoItem.done

        setTodoList([...todoList])
    }

    const deleteItem = (id) => {
        const newTodoList = todoList.filter((item) => item.id !== id)
        setTodoList([...newTodoList])
    }

    const todoItemsComponents = todoList.map((item) => (
        <TodoItem 
            key={item.id} 
            id={item.id}
            description={item.description} 
            deadline={item.deadline} 
            onUpdateItem={updateToDoItem} 
            done={item.done}
            onDeleteItem={deleteItem}
        />
    ))

    return (
        <div>
            <p>You have used {timer} seconds on this website.</p>
            <button onClick={addNewTask}>Add Task</button>
            <ul className="todoList">
                {
                    !todoList.length ? 'No tasks': todoItemsComponents
                }
            </ul>
        </div>
    )
}

export default TodoList