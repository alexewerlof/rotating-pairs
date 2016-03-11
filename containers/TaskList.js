import { connect } from 'react-redux'
import { updateTask } from '../actions'
import TaskList from '../components/TaskList'

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTaskChange: (id, property, value, propertyIndex) => {
      dispatch(updateTask(id, property, value, propertyIndex))
    }
  }
}

const RotatedTaskList = connect(mapStateToProps, mapDispatchToProps)(TaskList)

export default RotatedTaskList
