import clsx from 'clsx'
import React, { memo } from 'react'

import { useOvermind } from '../../overmind'

import useStyles from './Item.styles'

interface Props {
  id: string
}

export const TestItem = memo(({ id }: Props) => {
  const classes = useStyles()

  const { state, actions } = useOvermind()

  const item = state.items[id]

  const { children, isFirst, active } = item

  const onClick = () => actions.setActive(id)

  const className = clsx(classes.leaf, active && classes.active)

  const renderTop = () => (
    <span id={`${id}-top`} className={clsx(classes.connector, classes.top)} />
  )

  const renderBottom = () => (
    <span
      id={`${id}-bottom`}
      className={clsx(classes.connector, classes.bottom)}
    />
  )

  return (
    <div className={classes.leafWrapper}>
      <div className={className} id={id} onClick={onClick}>
        {!isFirst && renderTop()}
        {id}
        {children.length > 0 && renderBottom()}
      </div>
    </div>
  )
})
