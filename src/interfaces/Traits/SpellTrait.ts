import * as Types from '../Types'
import * as Values from '../Values'
import * as Filters from '../Filters'

export type SpellTraitType = 'filter-spells' | 'choose-spells'

interface SpellTrait<TTraitType extends SpellTraitType> {
  traitType: TTraitType
}

export interface ChooseSpellTrait extends SpellTrait<'choose-spells'> {
  choiceIds?: UUID[]
}

export interface FilterCreatureTrait extends SpellTrait<'filter-spells'> {
  filter: Filters.SpellFilter
}
