import Checkbox from "./Checkbox";

const TaskList = props => {
  const { taskList, setTaskList } = props;
  const onChangeStatus = element => {
    const { name, checked } = element.target;

    const updateList = list.map(item => ({
      ...item,
      done: item.id === name ? checked : item.done
    }));
    setTaskList(updateList);
  };

  const onClickRemoveItem = () => {
    const updateList = taskList.filter(item => !item.done);
    setTaskList(updateList);
  };

  const checkList = taskList.map(item => (
    <Checkbox key={item.id} data={item} onChange={onChangeStatus} />
  ));
  return (
    <div className="todoList">
      {taskList.length ? checkList : "Add your tasks"}
      {taskList.length ? (
        <p>
          <button className="DeleteButtom" onClick={onClickRemoveItem}>
           {'Remove the selected task(s)'}
          </button>
        </p>
      ) : null}
    </div>
  );
};

export default TaskList;