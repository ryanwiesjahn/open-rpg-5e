import * as Types from '../Types'
import * as Values from '../Values'

export type SpellLevelDivisor = 2 | 3 | 4

export interface SpellFilter {
  spellLevels?: Values.SpellLevels[]
  spellLevelDivisor?: SpellLevelDivisor
  spellClassIds?: UUID[]
  attackRanges?: Types.AttackRangeTypes[]
  isRitual?: boolean
}
