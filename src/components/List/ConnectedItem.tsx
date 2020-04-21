import React, { useRef, useEffect, useState } from 'react'
import clsx from 'clsx'
import { useDrag } from 'react-use-gesture'
import { useSpring, animated } from 'react-spring'

import { useOvermind } from '../../overmind'
import { IHoi4Item } from '../../overmind/state'

import useStyles from './Item.styles'

const trans = (x: number, y: number) => `translate3d(${x}px, ${y}px, 0)`

export const Hoi4Item = ({ id }: { id: string }) => {
  const classes = useStyles()

  const [isOpen, setIsOpen] = useState(false)

  const { state, actions } = useOvermind()

  const item = state.items[id]

  const { active, description } = item as IHoi4Item

  const onClick = () => actions.setActive(id)

  const className = clsx(classes.leaf, active && classes.active)

  const isDragging = useRef(false)

  const [{ height }, setH] = useSpring(() => ({
    height: 150,
    config: {
      tension: 200,
      clamp: true,
    },
    onRest: () => {
      actions.stopAnimating(id)
    },
  }))

  useEffect(() => void setH({ height: isOpen ? 200 : 150 }), [isOpen, setH])

  const toggle = () => {
    setIsOpen((prev) => !prev)
    actions.setAnimating(id)
  }

  const [{ xy }, set] = useSpring(() => ({
    xy: [0, 0] as [number, number],
    onRest: () => {
      !isDragging.current && actions.stopDragging(id)
    },
  }))

  useEffect(() => () => actions.stopDragging(id), [actions, id])

  const bind = useDrag(
    ({ down, movement: [mx, my], first }) => {
      if (first) {
        actions.setDragged(id)
      }

      isDragging.current = down
      set({ xy: down ? [mx, my] : [0, 0] })
    },
    { filterTaps: true }
  )

  return (
    <div className={classes.leafWrapper}>
      <animated.div
        className={className}
        id={id}
        style={{
          transform: xy.interpolate(trans as any),
          height,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {description}
          <div className={classes.button} {...bind()}>
            drag
          </div>
          <div className={classes.button} onClick={onClick}>
            active
          </div>
          <div className={classes.button} onClick={toggle}>
            expand
          </div>
        </div>
      </animated.div>
    </div>
  )
}
