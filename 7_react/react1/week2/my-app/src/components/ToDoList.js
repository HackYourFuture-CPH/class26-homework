import ListItem from './ListItem';
import './TodoList.css';

import { useState } from 'react';

export default function ToDoList(props) {

    const [todos, setTodos] = useState(
        [
            {
                id: 1,
                description: "Get out of bed",
                completed: false,
            },
            {
                id: 2,
                description: "Brush teeth",
                completed: false,
            },
            {
                id: 3,
                description: "Eat breakfast",
                completed: false,
            },
        ]
    );

    const addTodo = () => {
        const lastTodo = todos.length ? todos[todos.length - 1] : null;
        const lastId = lastTodo ? (lastTodo.id + 1) : 1;

        const newTodo = {
            id: lastId,
            description: "Random item",
            completed: false
        }
        setTodos([...todos, newTodo]);
    };

    const removeToDo = (id) => {
        setTodos(
            todos.filter(el => el.id !== id)
        );
    }

    const completeToDo = (id) => {
        setTodos(todos.map(el =>
            el.id === id ? { ...el, completed: !el.completed } : el
        ));
    };

    return (
        <>
            <button onClick={addTodo}>Add ToDo</button>
            <ul>
                {
                    todos.length ?
                        todos.map((element, i) => {
                            return (
                                <div className='listItem'>
                                    <input onChange={() => { completeToDo(element.id) }} type="checkbox" />
                                    <ListItem key={i} description={element.description} completed={element.completed} />
                                    <button onClick={() => { removeToDo(element.id) }}>Delete</button>
                                </div>
                            )
                        })
                        : "No items"
                }
            </ul>
        </>
    )
}

