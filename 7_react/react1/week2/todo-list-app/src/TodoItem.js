import React from 'react';

const TodoItem = (props) => {
 
  return (
    <div id="items">
      <input type="checkbox" /> 
      {props.description}, {props.deadline}
    </div>
  );
};

export default TodoItem;
