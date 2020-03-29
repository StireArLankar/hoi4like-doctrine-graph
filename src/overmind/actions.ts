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

    // iterate over all currently active items
    state.active.forEach((activeId) => {
      // Set `active` field of iterated item as `true` if code didnt reach clicked item
      // and as `false` if reached
      state.items[activeId].active = check

      // If item is active, then push its id to new active array
      check && newActive.push(activeId)

      // if `true`, then set `active` field for all next items as `false`
      if (activeId === id) {
        check = false
      }
    })

    state.active = newActive
    return
  }

  // 3. Id is direct ascendand, climb from clicked item

  // 2. Id is direct acsendant of last selected or first item
  {
    // Select last active item (by default root is active)
    const startId = state.active[state.active.length - 1]
    let selected = state.items[startId]
    // Set check for fork - if there are multiple direct descendands then we are at fork
    let forkCheck = selected.children.length === 1
    // Creating new active array
    const newActive: string[] = [...state.active]

    // If we are not at fork then
    while (forkCheck) {
      // Select descendand
      selected = state.items[selected.children[0]]
      // Push his id to new active array
      newActive.push(selected.id)
      // Check for his descendands (fork)
      forkCheck = selected.children.length === 1

      // However if we are at clicked item, then leave cycle
      if (selected.id === id) {
        // break;
        forkCheck = false
      }
    }

    // If we are at fork, but clicked item is direct descendand
    if (selected.children.includes(id)) {
      // Add him to array and set flag as true for this case
      newActive.push(id)
      forkCheck = true
    }

    // If we are at clicked item
    if (selected.id === id) {
      // Set flag as true for this case
      forkCheck = true
    }

    // If this case is right, then update state and add active field as `true`
    // for newly added items
    if (forkCheck) {
      state.active = newActive
      newActive.forEach((active) => (state.items[active].active = true))
      return
    }
  }

  // 4. Id is in sibling branch of currently active path
  // {
  //   let selected = state.items[id]
  //   const items = Object.values(state.items)
  //   let parents = items.filter((item) => item.children.includes(selected.id))
  //   let forkCheck = parents.length === 1

  //   if (parents.length === 1 && state.active.includes(parents[0].id)) {
  //     const parent = parents[0]
  //     forkCheck = false
  //     const indexOfParent = state.active.indexOf(parent.id)
  //     state.active = [...state.active.slice(0, indexOfParent), id]
  //   }

  //   while (forkCheck) {
  //     parents = items.filter((item) => item.children.includes(selected.id))
  //     forkCheck = parent.length === 1
  //   }

  //   const newActive = [...state.active]

  //   if (forkCheck) {
  //     state.active = newActive
  //     newActive.forEach((active) => (state.items[active].active = true))
  //     return
  //   }
  // }

  return
}
