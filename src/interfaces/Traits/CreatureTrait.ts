import * as Types from '../Types'
import * as Filters from '../Filters'

export type CreatureTraitType = Types.SelectTypes.Choose | Types.SelectTypes.Filter

interface BaseCreatureTrait<TTraitType extends CreatureTraitType> {
  traitType: TTraitType
  creatureGroup: Types.CreatureGroupTypes
}

interface ChooseCreatureTrait extends BaseCreatureTrait<Types.SelectTypes.Choose> {
  choiceIds: UUID[]
}

interface FilterCreatureTrait extends BaseCreatureTrait<Types.SelectTypes.Filter> {
  filter: Filters.CreatureFilter
}

export type CreatureTrait = ChooseCreatureTrait | FilterCreatureTrait
