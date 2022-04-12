import * as General from '../General'
import { Modifier } from '../Modifiers/Modifier'
import { SpellTrait } from '../Traits/SpellTrait'
import { ActionTrait } from '../Traits/ActionTrait'
import { CreatureTrait } from '../Traits/CreatureTrait'

export interface RacialTrait extends General.Entry {
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
