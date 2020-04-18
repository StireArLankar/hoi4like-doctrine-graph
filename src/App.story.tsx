import React from 'react'

import App from './App'
import { withOvermind } from './_storybook/withOvermind'

export default {
  title: 'App',
  decorators: [withOvermind],
}

export const app = () => <App />
