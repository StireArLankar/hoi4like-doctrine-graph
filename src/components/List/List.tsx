import React from 'react'
import clsx from 'clsx'

// import { Item, ItemProps } from '../Item/Item'

import useStyles from './List.styles'

export interface ListProps {
  items: any[]
}

// ['1', ['['', '']', '3'], ]

type Test = ItemProps | Test[]

export interface ItemProps {
  id: string
  children: string[]
  parent: string[]
}

const Item = ({ id, parent, children }: ItemProps) => {
  const classes = useStyles()

  return (
    <div className={classes.leafWrapper}>
      <div
        key={id}
        className={clsx(
          classes.leaf,
          parent.length > 0 && classes.top,
          children.length > 0 && classes.bottom
        )}
        id={id}
      >
        {id}
      </div>
    </div>
  )
}

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

    return <Item {...tree} />
  }

  const renderItems = () => {
    const tree: Test[] = []

    tree.push({ id: '1', children: ['', ''], parent: [] })

    tree.push([
      { id: '2a', children: [''], parent: [''] },
      { id: '2b', children: ['', ''], parent: [''] },
    ])

    tree.push([
      { id: '3a', children: ['', ''], parent: [''] },
      [
        { id: '3ba', children: [''], parent: [''] },
        { id: '3bb', children: [''], parent: [''] },
      ],
    ])

    tree.push([
      [
        { id: '4aa', children: [''], parent: [''] },
        { id: '4ab', children: [''], parent: [''] },
      ],
      { id: '4b', children: [''], parent: ['', ''] },
    ])

    tree.push([
      [
        { id: '5aa', children: [''], parent: [''] },
        { id: '5ab', children: [''], parent: [''] },
      ],
      { id: '5b', children: [''], parent: [''] },
    ])

    tree.push({ id: '6', children: ['', '', ''], parent: ['', '', ''] })

    tree.push([
      { id: '7a', children: [''], parent: [''] },
      { id: '7b', children: [''], parent: [''] },
      { id: '7c', children: [''], parent: [''] },
    ])

    tree.push({ id: '8', children: [], parent: ['', '', ''] })

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
