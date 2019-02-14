import * as Values from '../Values'
import { _Modifier } from '../Traits/Modifiers/Modifier'
import { SpellTrait } from '../Traits/SpellTrait'
import { ActionTrait } from '../Traits/ActionTrait'
import { CreatureTrait } from '../Traits/CreatureTrait'

export interface RacialTraitOption {
  id: UUID
  name: string
  snippet: string // Condensed, data-driven summary
  description: string
  prerequisiteRacialTraitOptionId?: UUID
  requiredCharacterLevel?: Values.Levels
  isGranted?: boolean
  modifiers: _Modifier<any>[]
  spellTraits: SpellTrait[]
  actionTraits: ActionTrait[]
  creatureTraits: CreatureTrait[]
}
