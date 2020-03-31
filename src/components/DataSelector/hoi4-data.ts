import { IHoi4Item } from '../../overmind/state'

export const mobileWarfare: IHoi4Item[] = [
  {
    type: 'hoi4',
    id: '1',
    children: ['2'],
    isFirst: true,
    description: `Mobile Warfare`,
  },

  {
    type: 'hoi4',
    id: '2',
    children: ['3'],
    description: `Delay`,
  },

  {
    type: 'hoi4',
    id: '3',
    children: ['4a', '4b'],
    description: `Elastic Defense`,
  },

  {
    type: 'hoi4',
    id: '4a',
    children: ['5a'],
    description: `Mobile Infantry`,
  },
  {
    type: 'hoi4',
    id: '4b',
    children: ['5b'],
    description: `Armored Spearhead`,
  },

  {
    type: 'hoi4',
    id: '5a',
    children: ['6a'],
    description: `Mass Motorization`,
  },
  {
    type: 'hoi4',
    id: '5b',
    children: ['6b'],
    description: `Schwerpunkt`,
  },

  {
    type: 'hoi4',
    id: '6a',
    children: ['7'],
    description: `Mechanized Offensive`,
  },
  {
    type: 'hoi4',
    id: '6b',
    children: ['7'],
    description: `Blitzkrieg`,
  },

  {
    type: 'hoi4',
    id: '7',
    children: ['8a', '8b'],
    description: `Kampfgruppe`,
  },

  {
    type: 'hoi4',
    id: '8a',
    children: ['9a'],
    description: `Volkssturm`,
  },
  {
    type: 'hoi4',
    id: '8b',
    children: ['9b'],
    description: `Fire brigades`,
  },

  {
    type: 'hoi4',
    id: '9a',
    children: ['10a'],
    description: `Non-Discriminatory Conscription`,
  },
  {
    type: 'hoi4',
    id: '9b',
    children: ['10b'],
    description: `Backhand Blow`,
  },

  {
    type: 'hoi4',
    id: '10a',
    children: [],
    description: `Werwolf Guerrillas`,
  },
  {
    type: 'hoi4',
    id: '10b',
    children: [],
    description: `Modern Blitzkrieg`,
  },
]
