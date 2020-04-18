import React, { memo } from 'react'

import { ItemWrapper } from './ItemWrapper'

const Renderer = ({ id }: { id: string }) => {
  return <>{id}</>
}

export const TestItem = memo(({ id }: { id: string }) => (
  <ItemWrapper id={id} Renderer={Renderer} />
))
