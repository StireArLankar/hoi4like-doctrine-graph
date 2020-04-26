import React, { useEffect, useState } from 'react'
import { animated, useSpring } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import useMeasure from 'react-use-measure'

import { useOvermind } from '../../overmind'

import useStyles from './Info.styles'

const trans = (x: number, y: number) => `translate3d(${x}px, ${y}px, 0)`

export const Info = () => {
  const {
    state: { active, items },
  } = useOvermind()

  const classes = useStyles()

  const [isOpen, setIsOpen] = useState(false)

  const [ref, { height: baseHeight }] = useMeasure()
  const [wrapperRef, { height: fullHeight, width: fullWidth }] = useMeasure()

  const [{ height }, setH] = useSpring(() => ({
    height: 0,
    config: {
      tension: 200,
      clamp: true,
    },
  }))

  useEffect(() => {
    setH({ height: isOpen ? baseHeight : 0 })
  }, [isOpen, setH, baseHeight])

  const toggle = () => setIsOpen((prev) => !prev)

  const [{ xy }, set] = useSpring(() => ({
    xy: [30, 30] as [number, number],
  }))

  const bind = useDrag(
    ({ offset: [mx, my] }) => {
      set({ xy: [mx, my] })
    },
    {
      filterTaps: true,
      bounds: {
        left: 30,
        top: 30,
        right: window.innerWidth - fullWidth - 30,
        bottom: window.innerHeight - fullHeight - 30,
      },
      rubberband: 0.2,
    }
  )

  return (
    <animated.div
      className={classes.wrapper}
      style={{ transform: xy.interpolate(trans as any) }}
      ref={wrapperRef}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 20,
          flexShrink: 0,
        }}
      >
        Info
        <div className={classes.button} {...bind()}>
          drag
        </div>
        <div className={classes.button} onClick={toggle}>
          expand
        </div>
      </div>
      <animated.div style={{ height, overflow: 'hidden', flexShrink: 0 }}>
        <ul ref={ref} style={{ padding: 10, margin: 0 }}>
          {active.map((item) => (
            <li key={items[item].id}>{items[item].id}</li>
          ))}
        </ul>
      </animated.div>
    </animated.div>
  )
}
