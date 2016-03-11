import React, { PropTypes } from 'react'
import Task from './Task'

let TaskList = ({ onTaskChange, tasks }) => {
  if (tasks && tasks.length > 0) {
    return <table>
        <thead>
          <tr>
            <th>Team 1</th>
            <th>Task</th>
            <th>Team 2</th>
          </tr>
        </thead>
        <tbody>
        { tasks.map(task =>
          <Task
            key = { task.id }
            { ...task }
            onChange = { (property, value, propertyIndex) => onTaskChange(task.id, property, value, propertyIndex) }
          />
        )}
        </tbody>
      </table>
  }
  return <div/>
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    pair: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  }).isRequired),
  onTaskChange: PropTypes.func.isRequired
}
export default TaskList
