import * as Types from '../Types'
import * as Values from '../Values'

export type CreatureRuleType = 'filter-creatures' | 'choose-creatures'
export type CreatureChallengeRatingLevelDivisor = 2 | 3 | 4

interface CreatureRule<TRuleType extends CreatureRuleType> {
  ruleType: TRuleType
  creatureGroup: Types.CreatureGroupTypes
}

export interface FilterCreatureRule extends CreatureRule<'filter-creatures'> {
  creatureType?: Types.CreatureTypes
  maxChallengeRating?: Values.ChallengeRatings
  challengeRatingLevelDivisor?: CreatureChallengeRatingLevelDivisor
  restrictedMovementTypes?: Types.MovementTypes[]
  creatureSizes?: Types.CreatureSizeTypes[]
}

export interface ChooseCreatureRule extends CreatureRule<'choose-creatures'> {
  creatureChoiceIds?: UUID[]
}
