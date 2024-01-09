import React from 'react';
import TodoHeader from './TodoHeader';
import TodoItem from './TodoItem';

const TodoList = () => {
  return (
    <div>
      <TodoHeader />
      <TodoItem description="Get out of bed" deadline="Wed Sep 13 2017" />
      <TodoItem description="Brush teeth" deadline="Thu Sep 14 2017" />
      <TodoItem description="Eat breakfast" deadline="Fri Sep 15 2017" />
    </div>
  );
};

export default TodoList;
