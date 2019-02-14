import * as Types from '../Types'
import * as Filters from '../Filters'

export type CreatureTraitType = 'choose-creatures' | 'filter-creatures'

interface CreatureTrait<TTraitType extends CreatureTraitType> {
  traitType: TTraitType
  creatureGroup: Types.CreatureGroupTypes
}

export interface ChooseCreatureTrait extends CreatureTrait<'choose-creatures'> {
  choiceIds: UUID[]
}

export interface FilterCreatureTrait extends CreatureTrait<'filter-creatures'> {
  filter: Filters.CreatureFilter
}
