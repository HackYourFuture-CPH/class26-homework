import { useState } from "react";
import TaskList from "./TaskList";
import FormTodo from "./FormTodo";

const TaskListContainer = () => {
  const [taskList, setTaskList] = useState([]); 
  const handleAddItem = addItem => {
    setList([...taskList, addItem]);
  };
  return (
    <div>
      <FormTodo handleAddItem={handleAddItem} />
      <TaskList list={taskList} setList={setTaskList} />
    </div>
  );
};

export default TaskListContainer;