import React from 'react'
import { Provider } from 'overmind-react'

import { List } from './components/List/List'
import { overmind } from './overmind'
import { DataSelector } from './components/DataSelector/DataSelector'

const App = () => (
  <Provider value={overmind}>
    <DataSelector />
    <List />
  </Provider>
)

export default App
