import './App.css';

function ActivityHeading({ task }) {
  return (
    <tr>
      <th colSpan="2">
        {task}
      </th>
    </tr>
  );
}

function ActivityRow({ activity }) {
  const name = activity.deadlineMet ? activity.desc :
    <span style={{ color: 'red' }}>
      {activity.desc}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{activity.when}</td>
    </tr>
  );
}

function ActivityTable({ activities }) {
  const rows = [];
  let lastActivity = null;

  activities.forEach((activity) => {
    if (activity.category !== lastActivity) {
      rows.push(
        <ActivityRow
          activity={{ desc: activity.category }}
          key={activity.category}
        />
      );
    }
    rows.push(
      <ActivityRow
        activity={activity}
        key={activity.desc}
      />
    );
    lastActivity = activity.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Activity</th>
          <th>Due date</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}


const LIST = [
  {category: "Task", desc: "Get out of bed", when: "Wed Sep 13 2017", deadlineMet: true},
  {category: "Task", desc: "Brush teeth", when: "Thu Sep 14 2017", deadlineMet: false},
  {category: "Task", desc: "Eat breakfast", when: "Fri Sep 15 2017", deadlineMet: true}
];

export default function App() {
  return <ActivityTable activities={LIST} />;
}
