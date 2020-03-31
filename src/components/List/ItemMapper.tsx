import React, { memo } from 'react'

import { useOvermind } from '../../overmind'

import { TestItem } from './TestItem'

export const ItemMapper = memo(({ id }: { id: string }) => {
  const { state } = useOvermind()

  const { type } = state.items[id]

  switch (type) {
    default:
      return <TestItem id={id} />
  }
})
