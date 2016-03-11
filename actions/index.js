let nextTaskId = 0
let nextPairMember = 0
let nextDirection = 0

export const rotatePairs = () => {
  return {
    type: 'rotate-pairs',
    pairMember: nextPairMember ? 1 : 0,
    direction: -nextDirection
  }
}

export const addTask = () => {
 return {
    type: 'add-task',
    id: nextTaskId++,
  }
}
