const tasks = (state = [], action) => {
 switch (action.type) {
  case 'add-task':
     return [...state, { id: action.id, label: '', pair: ['', ''] }]
  case 'rotate-pairs':
    for (let i = 0, ln = state.length; i < ln; i++) {
      if (action.direction === 1) {
        state[i].pair[action.pairMember] = state[(i + 1) % ln].pair[action.pairMember]
      } else {
        state[ln - i].pair[action.pairMember] = state[(ln - i - 1) % ln].pair[action.pairMember]
      }
    }
    return state
  default:
    return state
  }
}

export default tasks
