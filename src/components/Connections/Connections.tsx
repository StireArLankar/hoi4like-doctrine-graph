import React, { memo, useState, useEffect, useRef } from 'react'

import { useOvermind } from '../../overmind'

const fix = (num: number) => num.toFixed(3)

const getSecondaryCoord = (start: number, end: number) => end - start

const getFieldPosition = (
  field: string,
  parent?: boolean
): { x: number; y: number } => {
  const element = document.getElementById(`${field}`)

  if (!element) {
    return { x: 0, y: 0 }
  }

  const rect = element.getBoundingClientRect()

  const o1 = {
    y: parent ? rect.bottom : rect.top,
    x: rect.left + rect.width / 2,
  }

  return o1
}

const getPath = (from: string, to: string, ofx: number, ofy: number) => {
  const f1 = getFieldPosition(from, true)
  const f2 = getFieldPosition(to)

  const x1 = f1.x + ofx
  const y1 = f1.y + ofy
  const x4 = f2.x + ofx
  const y4 = f2.y + ofy

  if (x1 < 0 || x4 < 0) {
    return ''
  }

  const diffx = getSecondaryCoord(x1, x4)

  const x2 = x1 + diffx * 0.5
  const y2 = y1 + 3
  const x3 = x4 - diffx * 0.5
  const y3 = y4 - 3
  const arr1 = [fix(x1), fix(y1)].join(', ')
  const arr2 = [x2, y2, x3, y3, fix(x4), fix(y3)].join(', ')

  return `M${arr1}, V${fix(y2)}, C${arr2}, V${fix(y4)}`
}

interface ConnectionProps {
  from: string
  to: string
  wrapper: React.RefObject<SVGSVGElement>
  dragged?: boolean

  force: number
}

export const Connection = memo((props: ConnectionProps) => {
  const { from, to, wrapper, dragged, force } = props
  const [path, setPath] = useState('')

  useOvermind()

  const loopRef = useRef(0)

  useEffect(() => {
    if (!wrapper.current) {
      return setPath('')
    }

    const offset = wrapper.current.getBoundingClientRect()

    const ofx = wrapper.current.scrollLeft - offset.left

    const ofy = wrapper.current.scrollTop - offset.top

    setPath(getPath(from, to, ofx, ofy))

    if (dragged) {
      const loop = () => {
        if (wrapper.current) {
          const offset = wrapper.current.getBoundingClientRect()

          const ofx = wrapper.current.scrollLeft - offset.left

          const ofy = wrapper.current.scrollTop - offset.top

          setPath(getPath(from, to, ofx, ofy))
        }

        loopRef.current = window.requestAnimationFrame(loop)
      }

      loopRef.current = window.requestAnimationFrame(loop)
    } else {
      window.cancelAnimationFrame(loopRef.current)
      loopRef.current = 0
    }
  }, [from, to, dragged, wrapper, force])

  return (
    <path
      fill='none'
      strokeWidth='3'
      strokeLinecap='round'
      stroke='black'
      d={path}
    />
  )
})

export const Connections = memo(() => {
  const [force, setForce] = useState(0)

  const {
    state: { items, dragged },
  } = useOvermind()

  const ref = useRef<SVGSVGElement>(null)

  useEffect(() => {
    setForce(1)
    const handler = () => setForce((prev) => prev + 1)

    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  const renderConnections = () =>
    Object.values(items).map((item) =>
      item.children.map((child) => (
        <Connection
          key={child}
          from={item.id}
          to={child}
          wrapper={ref}
          force={force}
          dragged={dragged.includes(item.id) || dragged.includes(child)}
        />
      ))
    )

  return (
    <svg
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: -1,
      }}
      ref={ref}
    >
      {renderConnections()}
    </svg>
  )
})
