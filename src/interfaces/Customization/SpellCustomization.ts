import * as Types from '../Types'
import * as Values from '../Values'
import * as Measurements from '../Measurements'

export interface SpellCustomization {
  abilityScore?: Types.AbilityScoreTypes
  numberOfUses?: number
  resetType?: Types.ResetTypes
  castAtLevel?: Values.Levels
  castingTime?: Measurements.ActionTime
  spellRange?: Types.SpellRangeTypes
  rangeDistance?: number
  consumesSpellSlot?: boolean
  countsAsKnownSpell?: boolean
  alwaysPrepared?: boolean
  availableAtCharacterLevel?: Values.Levels
  minimumSpellChargesExpended?: number
  maximumSpellChargesExpended?: number
  saveDC?: number
  additionalDescription?: string
  restrictionDescription?: string
  ritualCastType?: Types.RitualCastTypes
}
