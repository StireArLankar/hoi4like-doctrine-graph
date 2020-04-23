import React, { memo, useEffect } from 'react'

import { useOvermind } from '../../overmind'

import useStyles from './DataSelector.styles'
import { testData1, testData2 } from './test-data'
import { mobileWarfare } from './hoi4-data'

export const DataSelector = memo(() => {
  const { actions } = useOvermind()

  const classes = useStyles()

  useEffect(() => {
    actions.setData({ data: mobileWarfare, type: 'Mobile Warfare' })
  }, [actions])

  return (
    <div className={classes.wrapper}>
      <button
        onClick={() =>
          actions.setData({ data: mobileWarfare, type: 'Mobile Warfare' })
        }
      >
        Mobile Warfare
      </button>

      <button
        onClick={() => actions.setData({ data: testData1, type: 'test1' })}
      >
        Test items 1
      </button>

      <button
        onClick={() => actions.setData({ data: testData2, type: 'test2' })}
      >
        Test items 2
      </button>
    </div>
  )
})
