import React from 'react'

let AddTaskButton = ({ onClick }) => {
  return <button onClick={ e => { onClick() } }>Add task</button>
}

export default AddTaskButton
