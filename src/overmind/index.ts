import { createOvermind, IConfig } from 'overmind'
import { createHook } from 'overmind-react'

import { state, Tree } from './state'
import * as actions from './actions'

export type TreeModel = Tree

const config = {
  state,
  actions,
}

export const useOvermind = createHook<typeof config>()

export const overmind = createOvermind(config, { devtools: true })

declare module 'overmind' {
  interface Config extends IConfig<typeof config> {}
}
