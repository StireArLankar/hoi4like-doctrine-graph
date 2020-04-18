import React, { memo, useRef, useState, useEffect } from 'react'
import clsx from 'clsx'

import { useOvermind } from '../../../overmind'
import { ITestItem } from '../../../overmind/state'

import useStyles from './Item.styles'

export const TestItem = memo(({ id }: { id: string }) => {
  const classes = useStyles()

  const { state, actions } = useOvermind()

  const { children, isFirst, active } = state.items[id] as ITestItem

  const ref = useRef<HTMLDivElement>(null)

  const [didMount, setDidMount] = useState(false)

  useEffect(() => {
    let t: NodeJS.Timer

    const getCheck = () => {
      if (!ref.current) {
        return (t = setTimeout(getCheck, 300))
      }

      const { x, y } = ref.current.getBoundingClientRect()
      if (x !== 0 && y !== 0) {
        setDidMount(true)
      }
    }

    getCheck()

    return () => void clearTimeout(t)
  }, [])

  // console.count(id)

  const renderConnections = () =>
    children.map((child, index) => {
      const { width, x } = ref.current!.getBoundingClientRect()
      const center = x + width / 2

      const el = document.getElementById(child)

      const { x: x2, width: width2 } = el!.getBoundingClientRect()
      const parent = x2 + width2 / 2

      const offset = parent - center

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
            width: Math.abs(offset) + 1,
            bottom: 0,
            position: 'absolute',
          }}
        />
      )
    })

  const onClick = () => actions.setActive(id)

  const className = clsx(
    classes.leaf,
    !isFirst && classes.top,
    active && classes.active,
    children.length > 0 && classes.bottom
  )

  return (
    <div className={classes.leafWrapper}>
      <div ref={ref} className={className} id={id} onClick={onClick}>
        {id}
      </div>

      {didMount && renderConnections()}
    </div>
  )
})
