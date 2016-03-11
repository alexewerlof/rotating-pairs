import React, { PropTypes } from 'react'

const Task = ({ onChange, pair, label }) => (
  <tr>
    <td><input type='text' defaultValue={ pair[0] } onChange={ e => onChange('pair', e.target.value, 0) }/></td>
    <td><input type='text' defaultValue={ label } onChange={ e => onChange('label', e.target.value) }/></td>
    <td><input type='text' defaultValue={ pair[1] } onChange={ e => onChange('pair', e.target.value, 1) }/></td>
  </tr>
)

Task.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  pair: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
}

export default Task
