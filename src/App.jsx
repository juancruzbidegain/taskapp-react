import {useState} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [userName, setUserName] = useState('example')
  const [taskItems, setTaskItems] = useState([
    {name: "Task one", done: false},
    {name: "Task two", done: false},
    {name: "Task three", done: false},
    {name: "Task four", done: false}
  ])

  const taskTableRow = () => {
      return taskItems.map(task => (
        <tr>
          <td>{task.name}</td>
        </tr>
      ))
  }

  return (
    <div className="App">
      <h1>Hola mundo!</h1>
      <table>
        <tr>
          <th>Description</th>
          <th>Done</th>
        </tr>
        <tbody>
            {taskTableRow()}
        </tbody>
      </table>
    </div>
  );
}

export default App;
