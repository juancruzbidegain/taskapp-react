import {useState} from 'react'
import TaskRow  from "./components/TaskRow"

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [userName, setUserName] = useState('example')
  const [taskItems, setTaskItems] = useState([

    {name: "Task one", done: false},
    {name: "Task two", done: false},
    {name: "Task three", done: true},
    {name: "Task four", done: false}


  ])

  const taskTableRow = () => (
    taskItems.map(task => (
      <TaskRow task={task} key={task.name} />
    ))
  )

  return (
    <div className="App">
      <h1>Hola mundo!</h1>
      <table>
        <thead>
        <tr>
          <th>Description</th>
          <th>Done</th>
        </tr>
        </thead>
        <tbody>
            {taskTableRow()}
        </tbody>
      </table>
    </div>
  );
}

export default App;
