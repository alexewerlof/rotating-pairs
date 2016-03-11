const tasks = (state = [], action) => {
  switch (action.type) {
    case 'update-task':
      let task = state.find(task => task.id === action.id)
      if (typeof action.propertyIndex !== "undefined") {
        task[action.property][action.propertyIndex] = action.value
      } else {
        task[action.property] = action.value
      }
      return state
    case 'add-task':
      return [...state, { id: action.id, label: '', pair: ['', ''] }]
    case 'rotate-pairs':
      if (state.length > 1) {
        let previous = state[action.direction === 1 ? state.length - 1 : 0].pair[action.pairMember]
        for (let i = 0, ln = state.length; i < ln; i++) {
          let index = action.direction === 1 ? i : ln - i - 1
          let current = state[index].pair[action.pairMember]
          state[index].pair[action.pairMember] = previous
          previous = current
        }
      }
      return state
    default:
      return state
  }
}

export default tasks
