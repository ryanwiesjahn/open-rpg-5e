import * as Types from '../Types'
import * as Filters from '../Filters'

export type CreatureTraitType = Types.SelectTypes.Choose | Types.SelectTypes.Filter

export type CreatureTrait<TTraitType extends CreatureTraitType> = {
  traitType: TTraitType
  creatureGroup: Types.CreatureGroupTypes
}
& TTraitType extends Types.SelectTypes.Choose ? {
  choiceIds: UUID[]
}
: TTraitType extends Types.SelectTypes.Filter ? {
  filter: Filters.CreatureFilter
}
: null
