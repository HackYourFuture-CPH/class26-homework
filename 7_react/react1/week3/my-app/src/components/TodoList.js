import { TodoItem } from "./TodoItem";
import { useState } from "react"
import { useEffect } from "react"
import { WatchCount } from "./WatchCount";
import * as React from 'react';


export function TodoList() {
    const [todos, setTodos] = useState([]);
    const [description, setDescription] = useState("")
    const [deadline, setDeadline] = useState("");
    const addTodo = () => {
        const newTodo = {
            id: todos.length + 1,
            description: description,
            deadline: deadline,

        };
        setTodos((previousState) => [...previousState, newTodo])
    };

    let Api = "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";
    useEffect(() => {
        fetch(Api)
            .then(response => response.json())
            .then(data => setTodos(data))
            .catch(error => console.error('Error fetching todos:', error));
    }, []);


    const handelUpDateItem = (id, newTodo) => {
     
        setTodos(todos.map(
        
            (todo) => {
                if (todo.id === id) {
                    (todo.description = newTodo)
                }
                return todo
            }
        ))
    }
    const handleDeleteItem = (itemId) => {
        setTodos(todos.filter((item) => (item.id !== itemId)))
    }

    const onChangeDeadline = (event) => {
        setDeadline(event.target.value);
    };

    const onChangeDescription = (event) => {
        setDescription(event.target.value);
    };

    return (
        <ul>
            <label>
                Todo description :
                <input
                    name="myInput"
                    value={description}
                    onChange={onChangeDescription} />
            </label>
            <br />
            <label>
                deadline :
                <input
                    type="date"
                    value={deadline}
                    onChange={onChangeDeadline} />
            </label>
            <WatchCount />
            <button onClick={addTodo}>Add todo</button>

            {todos.map((item) => (
                <TodoItem
                    key={item.id}
                    id={item.id}
                    description={item.description}
                    deleteItem={handleDeleteItem}
                    upDateItem={handelUpDateItem}
                />
            ))}
        </ul>
    );
}