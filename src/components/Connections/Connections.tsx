import React, { memo } from 'react'

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

  o1.top += diff
  o1.left += diff
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

  const diffx = getSecondaryCoord(x1, x4)

  const x2 = x1 + diffx * 0.5
  const y2 = y1
  const x3 = x4 - diffx * 0.5
  const y3 = y4
  const arr1 = [fix(x1), fix(y1)].join(', ')
  const arr2 = [x2, y2, x3, y3, fix(x4), fix(y4)].join(', ')

  return `M${arr1}, C${arr2}`
}

export const Connection = ({ from, to }: { from: string; to: string }) => {
  return <path fill='none' stroke='#555555' d={getPath(from, to)} />
}

export const Connections = memo(() => {
  return (
    <div style={{ width: '100%', height: '100%' }} id='container-wrapper'>
      asd
      <span>asd</span>
    </div>
  )
})
