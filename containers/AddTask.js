import AddTaskButton from '../components/AddTaskButton'
import connect from 'react-redux'
import addTask from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(addTask)
    }
  }
}

let AddTask = connect(null, mapDispatchToProps)(AddTask)

export default AddTask
