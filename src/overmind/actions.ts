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
      state.items[activeId].active !== check &&
        (state.items[activeId].active = check)

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

  // 2. Id is direct ascendand, climb from clicked item
  {
    let selected = state.items[id]
    const items = Object.values(state.items)
    let parents = items.filter((item) => item.children.includes(selected.id))
    let newActive: string[] = [id]

    let complete = parents.some((parent) => {
      const parentIsActive = state.active.includes(parent.id)
      if (parentIsActive) {
        newActive.unshift(parent.id)
        return true
      }

      return false
    })

    let forkCheck = parents.length === 1

    while (forkCheck && !complete) {
      selected = state.items[parents[0].id]
      newActive.unshift(selected.id)
      parents = items.filter((item) => item.children.includes(selected.id))

      complete = parents.some((parent) => {
        const parentIsActive = state.active.includes(parent.id)
        if (parentIsActive) {
          newActive.unshift(parent.id)
          return true
        }

        return false
      })

      forkCheck = parents.length === 1
    }

    if (complete) {
      const indexOfParent = state.active.indexOf(newActive[0])
      const oldActive = [...state.active.slice(0, indexOfParent)]

      for (let i = indexOfParent + 1; i < state.active.length; i++) {
        state.items[state.active[i]].active = false
      }

      newActive.forEach((id) => {
        state.items[id].active !== true && (state.items[id].active = true)
      })

      state.active = [...oldActive, ...newActive]
      return
    }

    // 3. Try to descend from last active item to fork
    const startId = state.active[state.active.length - 1]
    let selectedDown = state.items[startId]
    let forkCheckDown = selectedDown.children.length === 1
    const newActiveDown: string[] = [...state.active]

    let meeting = selectedDown.id === selected.id

    while (forkCheckDown && !meeting) {
      // Select descendand
      selectedDown = state.items[selectedDown.children[0]]
      // Push his id to new active array
      newActiveDown.push(selectedDown.id)
      // Check for his descendands (fork)
      forkCheckDown = selectedDown.children.length === 1

      // However if we are at clicked item, then leave cycle
      if (selectedDown.children.includes(selected.id)) {
        // break;
        meeting = true
      }
    }

    if (meeting) {
      const indexOfParent = state.active.indexOf(startId)

      for (let i = indexOfParent + 1; i < newActiveDown.length; i++) {
        state.items[newActiveDown[i]].active = true
      }

      newActive.forEach((id) => (state.items[id].active = true))

      state.active = [...newActiveDown, ...newActive]
      return
    }
  }

  return
}
