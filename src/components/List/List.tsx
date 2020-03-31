import React, { memo } from 'react'

import { TreeModel, useOvermind } from '../../overmind'

import { ItemMapper } from './ItemMapper'
import useStyles from './List.styles'

export const List = memo(() => {
  const {
    state: { tree },
  } = useOvermind()

  console.count('list')

  const classes = useStyles()

  const renderTree = (tree: TreeModel): JSX.Element => {
    if (Array.isArray(tree)) {
      return (
        <div
          key='array'
          className={classes.subtree}
          style={{ gridTemplateColumns: `repeat(${tree.length}, 1fr)` }}
        >
          {tree.map(renderTree)}
        </div>
      )
    }

    return <ItemMapper id={tree.id} key={tree.id} />
  }

  const renderItems = () => {
    return (
      <div className={classes.table}>
        {tree.map((leaf, index) => (
          <div key={index} className={classes.row}>
            {renderTree(leaf)}
          </div>
        ))}
      </div>
    )
  }

  return <div className={classes.wrapper}>{renderItems()}</div>
})
