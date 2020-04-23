import React, { useRef, useEffect, useState } from 'react'
import clsx from 'clsx'
import { useDrag } from 'react-use-gesture'
import { useSpring, animated } from 'react-spring'
import useMeasure from 'react-use-measure'

import { useOvermind } from '../../overmind'
import { IHoi4Item } from '../../overmind/state'

import useStyles from './Item.styles'

const trans = (x: number, y: number) => `translate3d(${x}px, ${y}px, 0)`

export const Hoi4Item = ({ id }: { id: string }) => {
  const classes = useStyles()

  const [isOpen, setIsOpen] = useState(false)

  const { state, actions } = useOvermind()

  const item = state.items[id]

  const { active, description, title } = item as IHoi4Item

  const [ref, { height: baseHeight }] = useMeasure()

  const onClick = () => actions.setActive(id)

  const className = clsx(classes.leaf, active && classes.active)

  const isDragging = useRef(false)

  const [{ height }, setH] = useSpring(() => ({
    height: 0,
    config: {
      tension: 200,
      clamp: true,
    },
    onRest: () => {
      actions.stopAnimating(id)
    },
  }))

  useEffect(() => {
    setH({ height: isOpen ? baseHeight : 0 })
  }, [isOpen, setH, baseHeight])

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

  useEffect(() => {
    return () => {
      actions.stopDragging(id)
      actions.stopAnimating(id)
    }
  }, [actions, id])

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
          height: 'auto',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: 150,
          }}
        >
          {title}
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
        <animated.div style={{ height, overflow: 'hidden' }}>
          <div ref={ref} style={{ padding: 10 }}>
            {description}
          </div>
        </animated.div>
      </animated.div>
    </div>
  )
}
