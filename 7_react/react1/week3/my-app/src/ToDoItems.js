import React from "react";
import EditAndDeleteTodo from "./EditAndDeleteTodo";

const TodoList = ({ todos, setTodos }) => {
  return (
    <ul>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <EditAndDeleteTodo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
        ))
      ) : (
        <div>No Items</div>
      )}
    </ul>
  );
};

export default TodoList;
