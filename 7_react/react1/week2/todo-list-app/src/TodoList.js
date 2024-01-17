import React, { useState } from 'react';
import TodoHeader from './TodoHeader';
import TodoItem from './TodoItem';

const intialList = [{
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

const TodoList = () => {
   
  const [todoList, setList] = useState(intialList)
  const todoListItem = todoList.map(item => (
    <TodoItem 
    key={item.num} 
    description={item.description} 
    deadline={item.deadline}/>))
    
  const addingTask = () => {
    const newTask = {
      num: 3,
      description: "new task",
      deadline: "now"
    }
    setList((previousState) => [...previousState, newTask])
  }

  return (
    <div>
      <TodoHeader />
      {todoListItem}
      <button onClick={addingTask}>add a task</button>
    </div>
  );
};

export default TodoList;
