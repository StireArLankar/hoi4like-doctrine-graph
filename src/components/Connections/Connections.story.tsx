import React, { useState, useEffect } from 'react'

import { withOvermind } from '../../_storybook/withOvermind'

import { Connection } from './Connections'

export default {
  title: 'Connections',
  decorators: [withOvermind],
}

const Temp = () => {
  const [, setCount] = useState(0)

  useEffect(() => {
    setCount(1)
    const handler = () => setCount((prev) => prev + 1)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  return (
    <>
      <Connection from='bottom-1' to='top-2' />
      <Connection from='bottom-2' to='top-3' />
    </>
  )
}

export const connection = () => {
  return (
    <div
      style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        top: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        left: 0,
      }}
      id='container-wrapper'
    >
      <div
        style={{
          width: 200,
          height: 100,
          background: 'red',
          position: 'relative',
          marginLeft: 50,
        }}
      >
        <span
          id='bottom-1'
          style={{ bottom: 0, left: '50%', position: 'absolute' }}
        />
      </div>
      <div
        style={{
          width: 200,
          height: 100,
          background: 'red',
          position: 'relative',
          marginRight: 50,
        }}
      >
        <span
          id='top-2'
          style={{ top: 0, left: '50%', position: 'absolute' }}
        />
        <span
          id='bottom-2'
          style={{ bottom: 0, left: '50%', position: 'absolute' }}
        />
      </div>
      <div
        style={{
          width: 200,
          height: 100,
          background: 'red',
          position: 'relative',
        }}
      >
        <span
          id='top-3'
          style={{ top: 0, left: '50%', position: 'absolute' }}
        />
      </div>

      <svg
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          pointerEvents: 'none',
        }}
      >
        <Temp />
      </svg>
    </div>
  )
}
