import React from 'react'
import { Provider } from 'overmind-react'

import { List } from './components/List/List'
import { overmind } from './overmind'

const App = () => (
  <Provider value={overmind}>
    <List />
  </Provider>
)

export default App
