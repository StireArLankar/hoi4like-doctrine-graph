import React from 'react'

import useStyles from './Item.styles'

export interface ItemProps {
  id: string
  prev: string[]
  next: string[]
  title: string
}

export const Item = (props: ItemProps) => {
  // const {} = props

  const classes = useStyles()

  return <div />
}
