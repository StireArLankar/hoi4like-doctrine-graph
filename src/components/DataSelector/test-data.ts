import { ITestItem } from '../../overmind/state'

export const testData1: ITestItem[] = [
  { id: '1', children: ['2a', '2b'], isFirst: true },
  { id: '2a', children: ['3a'] },
  { id: '2b', children: ['3ba', '3bb'] },

  { id: '3a', children: ['4aa', '4ab'] },
  { id: '3ba', children: ['4b'] },
  { id: '3bb', children: ['4b'] },

  { id: '4aa', children: ['5aa'] },
  { id: '4ab', children: ['5ab'] },
  { id: '4b', children: ['5b'] },

  { id: '5aa', children: ['6'] },
  { id: '5ab', children: ['6'] },
  { id: '5b', children: ['6'] },

  { id: '6', children: ['7a', '7b', '7c'] },

  { id: '7a', children: ['8'] },
  { id: '7b', children: ['8'] },
  { id: '7c', children: ['8'] },

  { id: '8', children: ['9a', '9b', '9c'] },

  { id: '9a', children: ['10'] },
  { id: '9b', children: [] },
  { id: '9c', children: [] },

  { id: '10', children: [] },
]

export const testData2: ITestItem[] = [
  { id: '1', children: ['2a', '2b'], isFirst: true },
  { id: '2a', children: ['3a'] },
  { id: '2b', children: ['3ba', '3bb'] },

  { id: '3a', children: ['4aa', '4ab'] },
  { id: '3ba', children: ['4b'] },
  { id: '3bb', children: ['4b'] },

  { id: '4aa', children: ['5aa'] },
  { id: '4ab', children: ['5ab'] },
  { id: '4b', children: ['5b'] },

  { id: '5aa', children: ['6'] },
  { id: '5ab', children: ['6'] },
  { id: '5b', children: ['6'] },

  { id: '6', children: [] },
]
