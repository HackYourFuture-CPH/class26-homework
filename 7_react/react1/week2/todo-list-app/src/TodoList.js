import React, { useState } from 'react';
import TodoHeader from './TodoHeader';
import TodoItem from './TodoItem';

const todos = [
  {
    id: 1,
    description: "Get out of bed",
    done: false,
  },
  {
    id: 2,
    description: "Brush teeth",
    done: false,
  },
  {
    id: 3,
    description: "Eat breakfast",
    done: false,
  },
];

const TodoList = () => {
  const [todoList, setList] = useState(todos);

  const toggleDone = (id) => {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  const deleteTask = (id) => {
    setList((prevList) => prevList.filter((item) => item.id !== id));
  };

  const todoListItem = todoList.map((item) => (
    <TodoItem
      key={item.id}
      description={item.description}
      done={item.done}
      toggleDone={() => toggleDone(item.id)}
      deleteTask={() => deleteTask(item.id)}
    />
  ));

  const addingTask = () => {
    const newTask = {
      id: todoList.length + 1,
      description: "New Task",
      done: false,
    };
    setList((prevList) => [...prevList, newTask]);
  };

  return (
    <div>
      <TodoHeader />
      {todoListItem}
      {todoList.length === 0 && <p>No items...</p>}
      <button onClick={addingTask}>Add a task</button>
    </div>
  );
};

export default TodoList;
