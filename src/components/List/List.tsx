import React, { useState, memo, useEffect, useRef } from 'react'
import clsx from 'clsx'

import { useOvermind, TreeModel } from '../../overmind'

import useStyles from './List.styles'

export interface ItemProps {
  id: string
  children: string[]
  isFirst?: boolean
}

const Item = memo(({ id, children, isFirst }: ItemProps) => {
  const classes = useStyles()

  useOvermind()

  const [coords, setCoords] = useState<number[]>([])

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (children.length > 0) {
      const newCoords = children.reduce<number[]>((acc, id) => {
        const el = document.getElementById(id)

        if (el) {
          const { x, width } = el.getBoundingClientRect()
          acc.push(x + width / 2)
        }

        return acc
      }, [])

      setCoords(newCoords)
    }
  }, [children])

  return (
    <div className={classes.leafWrapper}>
      <div
        ref={ref}
        className={clsx(
          classes.leaf,
          !isFirst && classes.top,
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
              bottom: 0,
              position: 'absolute',
            }}
          />
        )
      })}
    </div>
  )
})

export const List = () => {
  const {
    state: { tree },
  } = useOvermind()

  const classes = useStyles()

  const renderTree = (tree: TreeModel): JSX.Element => {
    if (Array.isArray(tree)) {
      return (
        <div
          key='array'
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
