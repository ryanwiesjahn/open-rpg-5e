import * as Types from '../Types'
import * as Values from '../Values'

export type CreatureChallengeRatingLevelDivisor = 2 | 3 | 4

export interface CreatureFilter {
  creatureType?: Types.CreatureTypes
  maxChallengeRating?: Values.ChallengeRatings
  challengeRatingLevelDivisor?: CreatureChallengeRatingLevelDivisor
  restrictedMovementTypes?: Types.MovementTypes[]
  creatureSizes?: Types.CreatureSizeTypes[]
}
