export type Test = ItemModel | Test[]

interface ItemModel {
  id: string
  children: string[]
  isFirst?: boolean
}

// const data = [
//   { id: '1', children: ['2a', '2b'], isFirst: true },

//   { id: '2a', children: ['3a'] },
//   { id: '2b', children: ['3ba', '3bb'] },

//   { id: '3a', children: ['4aa', '4ab'] },
//   { id: '3ba', children: ['4b'] },
//   { id: '3bb', children: ['4b'] },

//   { id: '4aa', children: ['5aa'] },
//   { id: '4ab', children: ['5ab'] },
//   { id: '4b', children: ['5b'] },

//   { id: '5aa', children: ['6'] },
//   { id: '5ab', children: ['6'] },
//   { id: '5b', children: ['6'] },

//   { id: '6', children: ['7a', '7b', '7c'] },

//   { id: '7a', children: ['8'] },
//   { id: '7b', children: ['8'] },
//   { id: '7c', children: ['8'] },

//   { id: '8', children: ['9a', '9b', '9c'] },

//   { id: '9a', children: ['10'] },
//   { id: '9b', children: [] },
//   { id: '9c', children: [] },

//   { id: '10', children: [] },
// ]

// let temp = data.filter((item) => !item.isFirst)
// export const tree: Test[] = data.filter((item) => item.isFirst)

// const getChildren = (item: Test, arr: string[]) => {
//   let children: string[] = []

//   if (Array.isArray(item)) {
//     children = item.reduce((acc, cur) => {
//       return getChildren(cur, acc)
//     }, [] as string[])
//   } else {
//     children = item.children
//   }

//   return [...arr, ...children]
// }

// const getLayer = (item: Test): Test => {
//   let items: Test = []

//   if (Array.isArray(item)) {
//     items = item.reduce((acc, cur) => {
//       acc.push(getLayer(cur))
//       return acc
//     }, [] as any[])
//   } else {
//     items = item.children.map(
//       (childId) => temp.find((item) => item.id === childId) as ItemModel
//     )
//   }

//   const check = items
//     .filter(Boolean)
//     .every((item: any) => item.id === (items as any)[0].id)

//   if (check) {
//     items = items[0]
//   }

//   return items
// }

// while (temp.length > 0) {
//   const currentLayer = tree[tree.length - 1]
//   const children = getChildren(currentLayer, [])
//   const newLayer = getLayer(currentLayer)

//   tree.push(newLayer)
//   temp = temp.filter((item) => !children.includes(item.id))
// }

type GetTreeArg = {
  id: string
  children: string[]
  isFirst?: boolean
}[]

export const getTree = (d: GetTreeArg) => {
  let temp = d.filter((item) => !item.isFirst)
  const tree: Test[] = d.filter((item) => item.isFirst)

  const getChildren = (item: Test, arr: string[]) => {
    let children: string[] = []

    if (Array.isArray(item)) {
      children = item.reduce((acc, cur) => {
        return getChildren(cur, acc)
      }, [] as string[])
    } else {
      children = item.children
    }

    return [...arr, ...children]
  }

  const getLayer = (item: Test, temp: ItemModel[]): Test => {
    let items: Test = []

    if (Array.isArray(item)) {
      items = item.reduce((acc, cur) => {
        acc.push(getLayer(cur, temp))
        return acc
      }, [] as any[])
    } else {
      items = item.children.map(
        (childId) => temp.find((item) => item.id === childId) as ItemModel
      )
    }

    const check = items
      .filter(Boolean)
      .every((item: any) => item.id === (items as any)[0].id)

    if (check) {
      items = items[0]
    }

    return items
  }

  while (temp.length > 0) {
    const currentLayer = tree[tree.length - 1]
    const children = getChildren(currentLayer, [])
    const newLayer = getLayer(currentLayer, temp)

    tree.push(newLayer)
    temp = temp.filter((item) => !children.includes(item.id))
  }

  return tree
}

// export const tree: Test[] = []

// tree.push({ id: '1', children: ['2a', '2b'] })

// tree.push([
//   { id: '2a', children: ['3a'] },
//   { id: '2b', children: ['3ba', '3bb'] },
// ])

// tree.push([
//   { id: '3a', children: ['4aa', '4ab'] },
//   [
//     { id: '3ba', children: ['4b'] },
//     { id: '3bb', children: ['4b'] },
//   ],
// ])

// tree.push([
//   [
//     { id: '4aa', children: ['5aa'] },
//     { id: '4ab', children: ['5ab'] },
//   ],
//   { id: '4b', children: ['5b'] },
// ])

// tree.push([
//   [
//     { id: '5aa', children: ['6'] },
//     { id: '5ab', children: ['6'] },
//   ],
//   { id: '5b', children: ['6'] },
// ])

// tree.push({ id: '6', children: ['7a', '7b', '7c'] })

// tree.push([
//   { id: '7a', children: ['8'] },
//   { id: '7b', children: ['8'] },
//   { id: '7c', children: ['8'] },
// ])

// tree.push({ id: '8', children: ['9a', '9b', '9c'] })

// tree.push([
//   { id: '9a', children: ['10'] },
//   { id: '9b', children: [] },
//   { id: '9c', children: [] },
// ])

// tree.push({ id: '10', children: [] })
