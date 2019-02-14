import * as Types from '../Types'
import * as Filters from '../Filters'
import * as Customization from '../Customization'

export type SpellTraitType = Types.SelectTypes.Choose | Types.SelectTypes.Filter

interface SpellTrait<TTraitType extends SpellTraitType> {
  traitType: TTraitType
  customization?: Customization.SpellCustomization
  isInfinite?: boolean
}

export interface ChooseSpellTrait extends SpellTrait<Types.SelectTypes.Choose> {
  choiceIds?: UUID[]
}

export interface FilterCreatureTrait extends SpellTrait<Types.SelectTypes.Filter> {
  filter: Filters.SpellFilter
}
