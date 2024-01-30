import { useState, useEffect } from "react";
import Checkbox from "./Checkbox";
import { DateTime } from "luxon";
import EditForm from "./EditForm";

const TaskList = (props) => {
  const { list, setList } = props;
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [editingTaskId, setEditingTaskId] = useState(null);

  useEffect(() => {
    const fetchDefaultTasks = async () => {
      try {
        const response = await fetch(
          "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch default tasks");
        }

        const data = await response.json();

        const tasksWithIds = data.map((task, index) => ({
          ...task,
          id: String(index + 1),
        }));
        setList(tasksWithIds);
      } catch (error) {
        console.error("Error fetching default tasks:", error.message);
      }
    };

    fetchDefaultTasks();
  }, []);

  const onChangeStatus = (element) => {
    const { name, checked } = element.target;

    const taskToUpdate = list.find((task) => task.id === name);

    if (taskToUpdate) {
      const updatedSelectedTasks = checked
        ? [...selectedTasks, taskToUpdate]
        : selectedTasks.filter((task) => task.id !== name);

      setSelectedTasks(updatedSelectedTasks);

      if (updatedSelectedTasks.length === 0) {
        setEditingTaskId(null);
      }

      const updateList = list.map((item) => ({
        ...item,
        done: item.id === name ? checked : item.done,
      }));
      setList(updateList);
    }
  };

  const onClickEditItem = (task) => {
    setEditingTaskId(task.id === "" ? null : task.id);
    setEditingTask(task);
  };

  const onSave = (updatedTask) => {
    if (editingTaskId === null) {
      const newTaskWithId = { ...updatedTask, id: String(list.length + 1) };
      const updatedList = [...list, newTaskWithId];
      setList(updatedList);
    } else {
      const updatedList = list.map((item) =>
        item.id === editingTaskId ? { ...item, ...updatedTask } : item
      );
      setList(updatedList);
    }

    setEditingTaskId(null);
    setEditingTask(null);
  };

  const onClickRemoveItem = () => {
    const updatedList = list.filter(
      (item) => !selectedTasks.some((task) => task.id === item.id)
    );
    setList(updatedList);
    setSelectedTasks([]);
    setEditingTaskId(null);
  };

  const renderTaskList = list.map((item) => (
    <div
      key={item.id}
      className={`taskRow ${item.done ? "done" : ""} ${
        selectedTasks.some((task) => task.id === item.id) ? "selected" : ""
      }`}
    >
      <Checkbox data={item} onChange={onChangeStatus} />
      {item.dueDate && (
        <span className="dueDate">
          | Date:{" "}
          {DateTime.fromISO(item.dueDate).toLocaleString(DateTime.DATE_FULL)}
        </span>
      )}
      <button className="editButton" onClick={() => onClickEditItem(item)}>
        Edit
      </button>
    </div>
  ));

  return (
    <div className="todoList">
      {list.length ? renderTaskList : "Add your tasks"}
      {editingTask && (
        <EditForm
          task={editingTask}
          onCancel={() => setEditingTask(null)}
          onSave={onSave}
        />
      )}
      {list.length ? (
        <p>
          <button className="deleteButton" onClick={onClickRemoveItem}>
            Remove the selected task(s)
          </button>
        </p>
      ) : null}
    </div>
  );
};

export default TaskList;
