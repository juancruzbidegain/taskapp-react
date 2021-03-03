import React from 'react'

const TaskRow = props => (
    <tr key={props.task.name}>
        <td>{props.task.name}</td>
        <td><input type="checkbox" checked={props.task.done}/></td>
    </tr>
)

export default TaskRow;