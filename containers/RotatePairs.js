import RotatePairsButton from '../components/RotatePairsButton'
import connect from 'react-redux'
import rotatePairs from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(rotatePairs)
    }
  }
}

let RotatePairs = connect(null, mapDispatchToProps)(RotatePairsButton)

export default RotatePairs
