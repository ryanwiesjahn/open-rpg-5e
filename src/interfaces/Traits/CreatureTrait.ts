import * as Types from '../Types'
import * as Filters from '../Filters'

export type CreatureTraitType = Types.SelectTypes.Choose | Types.SelectTypes.Filter

interface CreatureTrait<TTraitType extends CreatureTraitType> {
  traitType: TTraitType
  creatureGroup: Types.CreatureGroupTypes
}

export interface ChooseCreatureTrait extends CreatureTrait<Types.SelectTypes.Choose> {
  choiceIds: UUID[]
}

export interface FilterCreatureTrait extends CreatureTrait<Types.SelectTypes.Filter> {
  filter: Filters.CreatureFilter
}
