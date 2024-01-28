import { ListItem } from "./ListItem";
import { useState } from "react"
import { useEffect } from "react"
import * as React from 'react';

export function List() {
    const [list, setList] = useState(initialList);
    const addTask = () => {
        const newTask = {
            id: list.length + 1,
            description: "Get out of home",
        };
        setList((previousState) => [...previousState, newTask])
    };

    const handleDeleteItem = (itemId) => {
        setList(list.filter((item) => (item.id !== itemId)))
    }

    return (
        <ul>
            <WatchCount />
            <button onClick={addTask}>Add todo</button>

            {list.map((item) => (
                <ListItem
                 key = {item.id}
                    id = {item.id}
                    description={item.description}
                    deleteItem = {handleDeleteItem}
                />
            ))}
        </ul>
    );
}

const initialList = [
    {
        id: 0,
        description: "Get out of bed",
    },
    {
        id: 1,
        description: "Brush teeth",
    },
    {
        id: 2,
        description: "Eat breakfast",
    }
];

function WatchCount() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount((prev) => prev + 1);
        }, 1000);
    });

    return <div>{count}</div>;
}

