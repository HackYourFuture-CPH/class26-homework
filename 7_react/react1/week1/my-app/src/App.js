import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo.svg" alt="logo" />
        
        
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
      <td>{desc}</td>
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
          category={activity.category}
          key={activity.category} />
      );
    }
 
    

const LIST = [
  {category: "Task", desc: "Get out of bed", when: "Wed Sep 13 2017", deadlineMet: true},
  {category: "Task", desc: "Brush teeth", when: "Thu Sep 14 2017", deadlineMet:false},
  {category: "Task", desc: "Eat breakfast", when: "Fri Sep 15 2017", deadlineMet:true}
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}


      </header>
    </div>
  );
}

export default App;
