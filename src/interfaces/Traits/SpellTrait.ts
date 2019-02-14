import * as Types from '../Types'
import * as Values from '../Values'
import * as Filters from '../Filters'

export type SpellTraitType = Types.SelectTypes.Choose | Types.SelectTypes.Filter

interface SpellTrait<TTraitType extends SpellTraitType> {
  traitType: TTraitType
}

export interface ChooseSpellTrait extends SpellTrait<Types.SelectTypes.Choose> {
  choiceIds?: UUID[]
}

export interface FilterCreatureTrait extends SpellTrait<Types.SelectTypes.Filter> {
  filter: Filters.SpellFilter
}
