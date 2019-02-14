import * as Types from '../Types'
import * as Filters from '../Filters'
import * as Customization from '../Customization'

export type SpellTraitType = Types.SelectTypes.Choose | Types.SelectTypes.Filter

export type SpellTrait<TTraitType extends SpellTraitType> = {
  traitType: TTraitType
  customization?: Customization.SpellCustomization
  isInfinite?: boolean
} 
& TTraitType extends Types.SelectTypes.Choose ? {
  choiceIds?: UUID[]
}
: TTraitType extends Types.SelectTypes.Filter ? {
  filter: Filters.SpellFilter
}
: null
