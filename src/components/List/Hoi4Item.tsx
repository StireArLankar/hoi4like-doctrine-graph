import React from 'react'

import { useOvermind } from '../../overmind'
import { IHoi4Item } from '../../overmind/state'

import { ItemWrapper } from './ItemWrapper'

const Renderer = ({ id }: { id: string }) => {
  const { state } = useOvermind()

  const item = state.items[id] as IHoi4Item

  const { description } = item

  return <>{description}</>
}

export const Hoi4Item = ({ id }: { id: string }) => (
  <ItemWrapper id={id} Renderer={Renderer} />
)
