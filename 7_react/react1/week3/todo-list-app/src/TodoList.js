import React, { useState, useEffect } from 'react';
import TodoHeader from './TodoHeader';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todoList, setList] = useState([]);
  const [newTaskInput, setNewTaskInput] = useState('');
  const [newDeadlineInput, setNewDeadlineInput] = useState('');
  const [elapsedTime, setElapsedTime] = useState(0);

  
  useEffect(() => {
    fetch('https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw')
      .then(response => response.json())
      .then(data => setList(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => { clearInterval(timer) };
  }, []); 

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

  const handleEditTask = (id, editedDescription, editedDeadline) => {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === id
          ? { ...item, description: editedDescription, deadline: editedDeadline }
          : item
      )
    );
  };

  const addingTask = () => {
    if (newTaskInput.trim() !== '') {
      const newTask = {
        id: todoList.length + 1,
        description: newTaskInput,
        deadline: newDeadlineInput,
        done: false,
      };
      setList((prevList) => [...prevList, newTask]);
      setNewTaskInput('');
      setNewDeadlineInput('');
    }
  };

  const todoListItem = todoList.map((item) => (
    <TodoItem
      key={item.id}
      id={item.id}
      description={item.description}
      deadline={item.deadline}
      done={item.done}
      toggleDone={() => toggleDone(item.id)}
      deleteTask={() => deleteTask(item.id)}
      handleEditTask={handleEditTask} 
    />
  ));

  return (
    <div>
      <TodoHeader />
      <p>Time spent on the website: {elapsedTime} seconds</p>
      {todoListItem}
      {todoList.length === 0 && <p>No items...</p>}
      <input
        type="text"
        placeholder="Task description"
        value={newTaskInput}
        onChange={(e) => setNewTaskInput(e.target.value)}
      />
      <input
        type="date"
        placeholder="Task deadline"
        value={newDeadlineInput}
        onChange={(e) => setNewDeadlineInput(e.target.value)}
      />
      <button onClick={addingTask}>Add a task</button>
    </div>
  );
};

export default TodoList;
