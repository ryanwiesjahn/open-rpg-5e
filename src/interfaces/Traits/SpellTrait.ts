import * as Types from '../Types'
import * as Filters from '../Filters'
import * as Customization from '../Customization'

export type SpellTraitType = Types.SelectTypes.Choose | Types.SelectTypes.Filter

interface BaseSpellTrait<TTraitType extends SpellTraitType> {
  traitType: TTraitType
  customization?: Customization.SpellCustomization
  isInfinite?: boolean
} 

interface ChooseSpellTrait extends BaseSpellTrait<Types.SelectTypes.Choose> {
  choiceIds: UUID[]
}

interface FilterSpellTrait extends BaseSpellTrait<Types.SelectTypes.Filter> {
  filter: Filters.SpellFilter
}

export type SpellTrait = ChooseSpellTrait | FilterSpellTrait
