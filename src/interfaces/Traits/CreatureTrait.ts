import * as Types from '../Types'
import * as Filters from '../Filters'

export type CreatureTraitType = Types.SelectTypes.Choose | Types.SelectTypes.Filter

interface _CreatureTrait<TTraitType extends CreatureTraitType> {
  traitType: TTraitType
  creatureGroup: Types.CreatureGroupTypes
}

interface ChooseCreatureTrait extends _CreatureTrait<Types.SelectTypes.Choose> {
  choiceIds: UUID[]
}

interface FilterCreatureTrait extends _CreatureTrait<Types.SelectTypes.Filter> {
  filter: Filters.CreatureFilter
}

export type CreatureTrait = ChooseCreatureTrait | FilterCreatureTrait
