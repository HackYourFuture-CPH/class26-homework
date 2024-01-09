import React from 'react';
import './App.css';

function formatDate(rawDate) {
  const date = new Date(rawDate);
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-UK', options);
}

function ActivityRow({ activity }) {
  const description = activity.deadlineMet
    ? activity.desc
    : <span style={{ color: 'red' }}>{activity.desc}</span>;
    const formattedDate = formatDate(activity.when);


  return (
    <li>
      <span style={{ color: activity.deadlineMet ? 'black' : 'red' }}>
        {description}, {formattedDate}
      </span>
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
  { desc: "Get out of bed", when: "Wed Sep 13 2017", deadlineMet: true },
  { desc: "Brush teeth", when: "Thu Sep 14 2017", deadlineMet: false },
  { desc: "Eat breakfast", when: "Fri Sep 15 2017", deadlineMet: true }
];

export default function App() {
  return (
    <div>
      <p>Todo List</p>
      <ActivityList activities={LIST} />
    </div>
  );
}
