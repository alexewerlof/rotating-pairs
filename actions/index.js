let nextPairMember = 0
let nextDirection = -1

export const rotatePairs = () => {
  return {
    type: 'rotate-pairs',
    pairMember: nextPairMember++ % 2,
    direction: nextDirection *= -1
  }
}

export const addTask = () => {
  return {
    type: 'add-task',
    id: new Date().getTime()
  }
}

export const updateTask = (id, property, value, propertyIndex) => {
  return {
    type: 'update-task',
    id,
    property,
    value,
    propertyIndex
  }
}
