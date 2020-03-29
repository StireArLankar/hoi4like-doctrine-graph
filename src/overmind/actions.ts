import { Action } from 'overmind'

export const increaseCount: Action = ({ state }) => {
  state.count++
}

export const decreaseCount: Action = ({ state }) => {
  state.count--
}

export const setActive: Action<string> = ({ state }, id) => {
  // 1. Id is inside active
  if (state.active.includes(id)) {
    let check = true
    const newActive: string[] = []

    state.active.forEach((activeId) => {
      state.items[activeId].active = check

      check && newActive.push(activeId)

      if (activeId === id) {
        check = false
      }
    })

    state.active = newActive
    return
  }

  //2. Id is direct acsendant of last selected or first item
  const startId = state.active[state.active.length - 1]
  let selected = state.items[startId]
  let forkCheck = selected.children.length === 1
  const newActive: string[] = [...state.active]

  while (forkCheck) {
    selected = state.items[selected.children[0]]
    newActive.push(selected.id)
    forkCheck = selected.children.length === 1

    if (selected.id === id) {
      forkCheck = false
    }
  }

  if (selected.children.includes(id)) {
    newActive.push(id)
    forkCheck = true
  }

  if (selected.id === id) {
    forkCheck = true
  }

  console.log(newActive)

  if (forkCheck) {
    state.active = newActive
    newActive.forEach((active) => (state.items[active].active = true))
    return
  }
}
