import React, {useState} from 'react';
import './App.css';

function formatDate(rawDate) {
  const date = new Date(rawDate);
  const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
  return date.toLocaleDateString('en-UK', options);
}

function isOverdue(dueDate, completionDate) {
  const dueDateTime = new Date(dueDate);
  const completionDateTime = new Date(completionDate);
  return completionDateTime > dueDateTime;
}

function ActivityRow({ activity }) {
  const isTaskOverdue = isOverdue(activity.when, activity.completedAt);
  const description = isTaskOverdue
  ? <span style={{ color: 'red' }}>{activity.desc}</span>
  : activity.desc;
  const formattedDate = formatDate(activity.when);
  
  return (
    <li>
      <span style={{ color: isTaskOverdue ? 'red' : 'black' }}>
        {description}, </span> {formattedDate}
      
    </li>
  );
}

function ActivityList({ activities }) {
  const listItems = activities.map((activity) => (
    <ActivityRow
      activity={activity}
      key={activity.desc}
    />
  ));

  return (
    <ul>
      {listItems}
    </ul>
  );
}



const LIST = [
  { desc: "Get out of bed", when: "Wed Sep 13 2017", completedAt: "Wed Sep 13 2017" },
  { desc: "Brush teeth", when: "Thu Sep 14 2017", completedAt: "Thu Sep 15 2017" },
  { desc: "Eat breakfast", when: "Fri Sep 15 2017", completedAt: "Fri Sep 11 2017" }
];

const task1 =   { desc: "Put a smile on your face", when: "Wed Sep 12 2017", completedAt: "Wed Oct 13 2016" }

const task2 =   { when: "Wed Sep 12 2017", completedAt: "Wed Oct 13 2016" }


export default function App() {
const [newList, setNewList] = useState(LIST)
const addNewTask = () => {
  setNewList(previousState => [...previousState, task1, task2] )
}

  return (
    <div>
      <p>Todo List</p>
      <ActivityList activities={newList} />
      <button onClick={addNewTask}>Add activities</button>
    </div>
  );
}
