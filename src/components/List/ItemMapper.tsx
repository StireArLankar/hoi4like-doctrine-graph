import React, { memo } from 'react'

import { useOvermind } from '../../overmind'

import { TestItem } from './TestItem'
// import { Hoi4Item } from './Hoi4Item'
import { Hoi4Item } from './ConnectedItem'

export const ItemMapper = memo(({ id }: { id: string }) => {
  const { state } = useOvermind()

  const { type } = state.items[id]

  switch (type) {
    case 'hoi4':
      return <Hoi4Item id={id} />
    default:
      return <TestItem id={id} />
  }
})
