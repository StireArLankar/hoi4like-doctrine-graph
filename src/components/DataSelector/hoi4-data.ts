import { IHoi4Item } from '../../overmind/state'

export const mobileWarfare: IHoi4Item[] = [
  {
    type: 'hoi4',
    id: '1',
    children: ['2'],
    isFirst: true,
    title: `Mobile Warfare`,
    description: `Mobile Warfare is a focus on speed and maneuver to cut off and disorganize enemy forces.`,
  },

  {
    type: 'hoi4',
    id: '2',
    children: ['3'],
    title: `Delay`,
    description: `Even when a battle cannot be won, it can be advantageous to slow the progress of attacking forces with ambushes and delaying tactics.`,
  },

  {
    type: 'hoi4',
    id: '3',
    children: ['4a', '4b'],
    title: `Elastic Defense`,
    description: `Rather than focusing all strength on the front line, an elastic defense creates a 'deeper' layer of defenses which allows the defender more time to react and counter-attack while the attacker is spread out and bogged down.`,
  },

  {
    type: 'hoi4',
    id: '4a',
    children: ['5a'],
    title: `Mobile Infantry`,
    description: `Regular Infantry is often too slow to keep up with, react to, or escape from rapidly moving Armored forces. The answer is to focus on Motorized or Mechanized Infantry which can keep up with the pace of modern warfare.`,
  },
  {
    type: 'hoi4',
    id: '4b',
    children: ['5b'],
    title: `Armored Spearhead`,
    description: `To use Tanks to their fullest potential they cannot be tied down supporting Infantry. Instead they must be formed into fast moving, independent units which can spearhead attacks.`,
  },

  {
    type: 'hoi4',
    id: '5a',
    children: ['6a'],
    title: `Mass Motorization`,
    description: `An even greater focus on Motorized troops.`,
  },
  {
    type: 'hoi4',
    id: '5b',
    children: ['6b'],
    title: `Schwerpunkt`,
    description: `In any operation the Schwerpunkt, or Focal point, must be identified and maximum force concentrated to win at that point`,
  },

  {
    type: 'hoi4',
    id: '6a',
    children: ['7'],
    title: `Mechanized Offensive`,
    description: `Motorized troops are well and good, but to lead offensives we need Infantry that can ride into battle in armored transports which protect them and carry heavy weapons`,
  },
  {
    type: 'hoi4',
    id: '6b',
    children: ['7'],
    title: `Blitzkrieg`,
    description: `Blitzkrieg refers to the strategy of fast moving Armored forces supported by Mobile Infantry and air support breaking through enemy lines to disorganize and encircle them.`,
  },

  {
    type: 'hoi4',
    id: '7',
    children: ['8a', '8b'],
    title: `Kampfgruppe`,
    description: `A Kampfgruppe was an ad hoc formation which was organized to carry out a specific task.`,
  },

  {
    type: 'hoi4',
    id: '8a',
    children: ['9a'],
    title: `Volkssturm`,
    description: `The Volkssturm, or People's Militia, consisted of men who were too old, too young, or otherwise unfit for regular military service.`,
  },
  {
    type: 'hoi4',
    id: '8b',
    children: ['9b'],
    title: `Fire brigades`,
    description: `'Fire brigades' were hastily scrambled forces thrown together to react to enemy breakthroughs or other critical issues.`,
  },

  {
    type: 'hoi4',
    id: '9a',
    children: ['10a'],
    title: `Non-Discriminatory Conscription`,
    description: `Even invalids and cripples must be drafted, there can be no such thing as a civilian.`,
  },
  {
    type: 'hoi4',
    id: '9b',
    children: ['10b'],
    title: `Backhand Blow`,
    description: `Rather than fighting for every inch of ground, enemy penetrations are largely avoided until they have extended themselves, at which point they can be cut off and destroyed by counterattacks.`,
  },

  {
    type: 'hoi4',
    id: '10a',
    children: [],
    title: `Werwolf Guerrillas`,
    description: `The Werwolves were a planned German resistance group that would fight on against the occupying powers when the war was lost.`,
  },
  {
    type: 'hoi4',
    id: '10b',
    children: [],
    title: `Modern Blitzkrieg`,
    description: `The pinnacle of Mobile Warfare, Modern Blitzkrieg incorporates all the latest advances of technology and the lessons learned from previous doctrines.`,
  },
]
