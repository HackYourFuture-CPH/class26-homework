import Checkbox from "./Checkbox";

const TaskList = props => {
  const { list, setList } = props;
  const onChangeStatus = element => {
    const { name, checked } = element.target;

    const updateList = list.map(item => ({
      ...item,
      done: item.id === name ? checked : item.done
    }));
    setList(updateList);
  };

  const onClickRemoveItem = () => {
    const updateList = list.filter(item => !item.done);
    setList(updateList);
  };

  const checkList = list.map(item => (
    <Checkbox key={item.id} data={item} onChange={onChangeStatus} />
  ));
  return (
    <div className="todoList">
      {list.length ? checkList : "Add your tasks"}
      {list.length ? (
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