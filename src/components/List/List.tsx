import React, { useState, memo, useEffect, useRef } from 'react'
import clsx from 'clsx'

// import { Item, ItemProps } from '../Item/Item'

import useStyles from './List.styles'

export interface ListProps {
  items: any[]
}

const tree: Test[] = []

tree.push({ id: '1', children: ['2a', '2b'], parent: [] })

tree.push([
  { id: '2a', children: ['3a'], parent: ['1'] },
  { id: '2b', children: ['3ba', '3bb'], parent: ['1'] },
])

tree.push([
  { id: '3a', children: ['4aa', '4ab'], parent: ['2a'] },
  [
    { id: '3ba', children: ['4b'], parent: ['2b'] },
    { id: '3bb', children: ['4b'], parent: ['2b'] },
  ],
])

tree.push([
  [
    { id: '4aa', children: ['5aa'], parent: ['3a'] },
    { id: '4ab', children: ['5ab'], parent: ['3a'] },
  ],
  { id: '4b', children: ['5b'], parent: ['3bb', '3ba'] },
])

tree.push([
  [
    { id: '5aa', children: ['6'], parent: ['4aa'] },
    { id: '5ab', children: ['6'], parent: ['4ab'] },
  ],
  { id: '5b', children: ['6'], parent: ['4b'] },
])

tree.push({
  id: '6',
  children: ['7a', '7b', '7c'],
  parent: ['5aa', '5ab', '5b'],
})

tree.push([
  { id: '7a', children: ['8'], parent: ['6'] },
  { id: '7b', children: ['8'], parent: ['6'] },
  { id: '7c', children: ['8'], parent: ['6'] },
])

tree.push({ id: '8', children: [], parent: ['7a', '7b', '7c'] })

type Test = ItemProps | Test[]

export interface ItemProps {
  id: string
  children: string[]
  parent: string[]
}

const Item = memo(({ id, parent, children }: ItemProps) => {
  const classes = useStyles()

  const [coords, setCoords] = useState<number[]>([])

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (parent.length > 0) {
      const newCoords = parent.reduce((acc, id) => {
        const el = document.getElementById(id)

        if (el) {
          const { x, width } = el.getBoundingClientRect()
          acc.push(x + width / 2)
        }

        return acc
      }, [] as number[])

      setCoords(newCoords)
    }
  }, [parent])

  return (
    <div className={classes.leafWrapper}>
      <div
        ref={ref}
        className={clsx(
          classes.leaf,
          parent.length > 0 && classes.top,
          children.length > 0 && classes.bottom
        )}
        id={id}
      >
        {id}
      </div>

      {coords.map((coord, index) => {
        const { width, x } = ref.current?.getBoundingClientRect() || {
          x: 0,
          width: 0,
        }

        const center = x + width / 2
        const offset = coord - center

        if (offset === 0) {
          return null
        }

        return (
          <div
            key={index}
            style={{
              height: 2,
              background: 'black',
              left: offset > 0 ? '50%' : 'auto',
              right: offset < 0 ? '50%' : 'auto',
              width: Math.abs(coord - center) + 1,
              top: 0,
              position: 'absolute',
            }}
          />
        )
      })}
    </div>
  )
})

export const List = (props: ListProps) => {
  const { items } = props

  const classes = useStyles()

  const renderTree = (tree: Test): JSX.Element => {
    if (Array.isArray(tree)) {
      return (
        <div
          className={classes.subtree}
          style={{ gridTemplateColumns: `repeat(${tree.length}, 1fr)` }}
        >
          {tree.map(renderTree)}
        </div>
      )
    }

    return <Item {...tree} key={tree.id} />
  }

  const renderItems = () => {
    return (
      <div className={classes.table}>
        {tree.map((leaf) => (
          <div className={classes.row}>{renderTree(leaf)}</div>
        ))}
      </div>
    )
  }

  return <div className={classes.wrapper}>{renderItems()}</div>
}
