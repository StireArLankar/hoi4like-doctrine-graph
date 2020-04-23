import { Action } from 'overmind'

import { Item, StateItem } from './state'
import { getTree } from './data'

export const increaseCount: Action = ({ state }) => {
  state.count++
}

export const decreaseCount: Action = ({ state }) => {
  state.count--
}

export const setDragged: Action<string> = ({ state }, id) => {
  !state.dragged.includes(id) && state.dragged.push(id)
}

export const setAnimating: Action<string> = ({ state }, id) => {
  !state.animating.includes(id) && state.animating.push(id)
}

export const stopAnimating: Action<string> = ({ state }, id) => {
  const index = state.animating.indexOf(id)
  if (index > -1) {
    state.animating.splice(index, 1)
  }
}

export const stopDragging: Action<string> = ({ state }, id) => {
  const index = state.dragged.indexOf(id)
  if (index > -1) {
    state.dragged.splice(index, 1)
  }
}

type SetDataProps = {
  data: Item[]
  type: string
}

export const setData: Action<SetDataProps> = ({ state }, { data, type }) => {
  if (state.type === type) {
    return
  }

  state.items = data.reduce((acc, cur) => {
    if (cur.isFirst) {
      state.active = [cur.id]
      acc[cur.id] = { ...cur, active: true }
    } else {
      acc[cur.id] = { ...cur, active: false }
    }
    return acc
  }, {} as Record<string, StateItem>)

  state.tree = getTree(data)

  state.type = type

  state.animating = []
  state.dragged = []
}

export const setActive: Action<string> = ({ state }, id) => {
  if (state.active[state.active.length - 1] === id) {
    return
  }

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
    // Select clicked item
    let selected = state.items[id]
    // Convert items to array
    const items = Object.values(state.items)
    // Find parents of clicked item
    let parents = items.filter((item) => item.children.includes(selected.id))
    // Add clicked item to new active array
    let newActive: string[] = [id]

    // Check if any parent is in active array
    let complete = parents.some((parent) => {
      const parentIsActive = state.active.includes(parent.id)
      // If parent is in active array, then add ++++++ and set complete to true
      if (parentIsActive) {
        newActive.unshift(parent.id)
        return true
      }

      return false
    })

    // Check for multiple parents
    let forkCheck = parents.length === 1

    // While selected has one parent and none of his parents is in active array
    while (forkCheck && !complete) {
      // Select parent (he is only one)
      selected = state.items[parents[0].id]
      // Unshift his id to array
      newActive.unshift(selected.id)
      // Find his parents
      parents = items.filter((item) => item.children.includes(selected.id))

      // Check if any parent is in active array
      complete = parents.some((parent) => {
        const parentIsActive = state.active.includes(parent.id)
        if (parentIsActive) {
          newActive.unshift(parent.id)
          return true
        }

        return false
      })

      // Check for multiple parents
      forkCheck = parents.length === 1
    }

    // If found parent that is in active array
    if (complete) {
      // Slice active array from start to parent and set others active to `false`
      const indexOfParent = state.active.indexOf(newActive[0])
      const oldActive = [...state.active.slice(0, indexOfParent)]

      for (let i = indexOfParent + 1; i < state.active.length; i++) {
        state.items[state.active[i]].active = false
      }

      // For new array set active to true
      newActive.forEach((id) => {
        state.items[id].active !== true && (state.items[id].active = true)
      })

      // Update active array
      state.active = [...oldActive, ...newActive]
      return
    }

    // 3. Try to descend from last active item to fork
    // Last item in active array
    const startId = state.active[state.active.length - 1]
    let selectedDown = state.items[startId]
    // Check for multiple children
    let forkCheckDown = selectedDown.children.length === 1
    // Creating increased array
    const newActiveDown: string[] = [...state.active]

    // Set check to false as we didnt reach startId from clicked item
    let meeting = false

    // While no meeting and only one child
    while (forkCheckDown && !meeting) {
      // Select child
      selectedDown = state.items[selectedDown.children[0]]
      // Push his id to new active array
      newActiveDown.push(selectedDown.id)
      // Check for his children amount (fork)
      forkCheckDown = selectedDown.children.length === 1

      // If newly selected item has selected id from prev case as his child
      if (selectedDown.children.includes(selected.id)) {
        // MEETING!
        meeting = true
      }
    }

    if (meeting) {
      // Set top chain items as active
      const indexOfParent = state.active.indexOf(startId)

      for (let i = indexOfParent + 1; i < newActiveDown.length; i++) {
        state.items[newActiveDown[i]].active = true
      }

      // Set bottom chain items as active
      newActive.forEach((id) => (state.items[id].active = true))

      // Update active array
      state.active = [...newActiveDown, ...newActive]
      return
    }
  }

  return
}
