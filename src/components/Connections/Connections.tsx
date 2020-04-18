import React, { memo, useState, useEffect } from 'react'

import { useOvermind } from '../../overmind'

const fix = (num: number) => num.toFixed(3)
const min_diff = 42
const getSecondaryCoord = (start: number, end: number) =>
  Math.sign(end - start) * Math.max(min_diff, Math.abs(end - start))

const getFieldPosition = (field: string): { left: number; top: number } => {
  const element = document.getElementById(`${field}`)

  if (!element) {
    return { left: 0, top: 0 }
  }

  const rect = element.getBoundingClientRect()
  // const diff = 3
  const diff = 0

  const o1 = {
    top: rect.top + diff,
    left: rect.left + diff,
  }

  return o1
}

const getPath = (from: string, to: string) => {
  const f1 = getFieldPosition(from)
  const f2 = getFieldPosition(to)

  const wrapper = document.getElementById('container-wrapper')

  if (!wrapper) {
    return ''
  }

  const offset = wrapper.getBoundingClientRect()

  const ofx = wrapper.scrollLeft - offset.left

  const ofy = wrapper.scrollTop - offset.top

  const x1 = f1.left + ofx
  const y1 = f1.top + ofy
  const x4 = f2.left + ofx
  const y4 = f2.top + ofy

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

export const Connection = ({ from, to }: { from: string; to: string }) => {
  const path = getPath(from, to)

  return (
    <path
      fill='none'
      strokeWidth='3'
      strokeLinecap='round'
      stroke='black'
      d={path}
    />
  )
}

export const Connections = memo(() => {
  const [, setCount] = useState(0)

  const {
    state: { items },
  } = useOvermind()

  useEffect(() => {
    setCount(1)
    const handler = () => setCount((prev) => prev + 1)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  const renderConnections = () =>
    Object.values(items).map((item) =>
      item.children.map((child) => (
        <Connection
          key={child}
          from={`${item.id}-bottom`}
          to={`${child}-top`}
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
      id='container-wrapper'
    >
      {renderConnections()}
    </svg>
  )
})
