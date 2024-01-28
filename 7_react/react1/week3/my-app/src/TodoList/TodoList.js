import TodoItem from "../TodoItem/TodoItem"
import "./TodoList.css"
import React, { useEffect, useState } from "react"
import CreateTask from "../CreateTask"
import BorderWrapper from './BorderWrapper'
/*const defaultTodoList = [{
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
}]*/




function TodoList() {
    const [todoList, setTodoList] = useState([]);
    const fetchData = async () => {
        const response = await fetch("https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw");
        const data = await response.json();

        const withDoneStatus = data.map((item) =>({
            ...item,
            deadline: new Date(item.deadline),
            done: false,
        }))

        setTodoList(withDoneStatus);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const onAddNewTask = (description, deadline) => {
        const newTask = {
            id: new Date().getTime(),
            description: description,
            deadline: deadline,
            done: false,
        };

        const newTodoList = [...todoList, newTask];

        setTodoList(newTodoList)
    }

    const updateToDoItem = (id, description, done) => {
        const todoItem = todoList.find((item) => item.id === id)

        todoItem.description = description
        todoItem.done = done

        setTodoList([...todoList])
    }

    const deleteItem = (id) => {
        const newTodoList = todoList.filter((item) => item.id !== id)
        setTodoList([...newTodoList])
    }

    const todoItemsComponents = todoList.map((data) => (
       <BorderWrapper key={data.id} >
            <TodoItem
                id={data.id}
                description={data.description}
                deadline={data.deadline}
                onUpdateItem={updateToDoItem}
                done={data.done}
                onDeleteItem={deleteItem}
            />
        </BorderWrapper>
    ))

    return (
        <div>
            <CreateTask addNewTask={onAddNewTask} />
            <ul className="todoList">
                {
                    !todoList.length ? 'No tasks' : todoItemsComponents
                }
            </ul>
        </div>
    )
}

export default TodoList