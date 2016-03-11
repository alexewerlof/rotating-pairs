import React, { PropTypes } from 'react'

let TaskList = ({ tasks }) => {
  if (tasks.length > 0) {
    return <table>
      <tr>
        <th>Team 1</th>
        <th>Task</th>
        <th>Team 2</th>
      </tr>
      { tasks.map(task =>
        <tr>
          <td><input type="text" value="{task.pair[0]}" /></td>
          <td><input type="text" value="{task.label}" /></td>
          <td><input type="text" value="{task.pair[1]}" /></td>
        </tr>
      )}
      </table>
  }
  return ""
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    pairs: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired)
}
export default TaskList
