import { Derive } from 'overmind'

import { getTree } from './data'

interface ItemModel {
  id: string
  children: string[]
  isFirst?: boolean
}

export type Tree = ItemModel | Tree[]

export type IState = {
  items: Record<string, ItemModel>
  tree: Derive<IState, Tree[]>
  count: number
}

export const state: IState = {
  items: {
    '1': { id: '1', children: ['2a', '2b'], isFirst: true },
    '2a': { id: '2a', children: ['3a'] },
    '2b': { id: '2b', children: ['3ba', '3bb'] },

    '3a': { id: '3a', children: ['4aa', '4ab'] },
    '3ba': { id: '3ba', children: ['4b'] },
    '3bb': { id: '3bb', children: ['4b'] },

    '4aa': { id: '4aa', children: ['5aa'] },
    '4ab': { id: '4ab', children: ['5ab'] },
    '4b': { id: '4b', children: ['5b'] },

    '5aa': { id: '5aa', children: ['6'] },
    '5ab': { id: '5ab', children: ['6'] },
    '5b': { id: '5b', children: ['6'] },

    '6': { id: '6', children: ['7a', '7b', '7c'] },

    '7a': { id: '7a', children: ['8'] },
    '7b': { id: '7b', children: ['8'] },
    '7c': { id: '7c', children: ['8'] },

    '8': { id: '8', children: ['9a', '9b', '9c'] },

    '9a': { id: '9a', children: ['10'] },
    '9b': { id: '9b', children: [] },
    '9c': { id: '9c', children: [] },

    '10': { id: '10', children: [] },
  },
  tree: ({ items }) => getTree(Object.values(items)),
  count: 0,
}

interface ItemModel {
  id: string
  children: string[]
  isFirst?: boolean
}
