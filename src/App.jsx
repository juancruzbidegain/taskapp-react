import {useState} from 'react'
import TaskRow  from "./components/TaskRow"
import TaskBanner  from "./components/TaskBanner"
import TaskCreator  from "./components/TaskCreator"
import VisibilityControl  from "./components/VisibilityControl"

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [userName, setUserName] = useState('User Expamle')
  
  const [taskItems, setTaskItems] = useState([

    {name: "Task one", done: false},
    {name: "Task two", done: false},
    {name: "Task three", done: false},
    {name: "Task four", done: true}
  ])

  const [showCompleted, setShowCompleted] = useState(true)

  const toggleTask = task => {
    setTaskItems(taskItems.map(t => (t.name === task.name ? {...t, done: !t.done} : t  )))
  }

  const taskTableRow = doneValue => (
    taskItems
    .filter(task => task.done == doneValue)
    .map(task => (
      <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
    ))
  )

    const createNewTask = taskName => {
        if(!taskItems.find(t => t.name === taskName)){
          setTaskItems([...taskItems, {name:taskName , done: false}])
        }
    }


  return (
    <div className="App">
      <TaskBanner userName={userName} taskItems={taskItems}/>
      <TaskCreator callback={createNewTask} />
      <table className="table table-striped table-border">
        <thead>
        <tr>
          <th>Description</th>
          <th>Done</th>
        </tr>
        </thead>
        <tbody>
            {taskTableRow(false)}
        </tbody>
      </table>
      <div className="bg-secondary-text-white text-center p-2">
        <VisibilityControl 
        description="Completed Task"
        isCheked={showCompleted}
        callback={cheked => setShowCompleted(cheked)}
        />
      </div>
      {
        showCompleted && (
          <table className="table table-striped table-border">
              <thead>
                <tr>
                <th>Description</th>
                <th>Done</th>
                </tr>
              </thead>
              <tbody>
                {taskTableRow(true)}
              </tbody>
          </table>
        )
      }
    </div>
  );
}

export default App;
