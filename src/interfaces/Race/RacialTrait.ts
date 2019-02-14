import { Modifier } from '../Traits/Modifiers/Modifier'
import { SpellTrait } from '../Traits/SpellTrait'
import { ActionTrait } from '../Traits/ActionTrait'
import { CreatureTrait } from '../Traits/CreatureTrait'
import { RacialTraitOption } from './RacialTraitOption'

export interface RacialTrait {
  id: UUID
  name: string
  snippet: string // Condensed, data-driven summary
  description: string
  characterLevelsWhereOptionsKnown?: number[]
  racialTraitOptionIds: UUID[]
  modifiers: Modifier[]
  spellTraits: SpellTrait[]
  actionTraits: ActionTrait[]
  creatureTraits: CreatureTrait[]
}
