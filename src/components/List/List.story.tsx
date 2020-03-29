import React from 'react'

import { withOvermind } from '../../_storybook/withOvermind'

import { List } from './List'

export default {
  title: 'List',
  component: List,
  decorators: [withOvermind],
}

export const list = () => <List />
