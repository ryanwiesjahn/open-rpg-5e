import { AbilityScores } from "./interfaces/Stats/AbilityScores"
import * as Types from './interfaces/Types'

export const getAbilityModifier = (abilityScore: number): number => {
  return Math.floor(((abilityScore - 10) / 2))
}

export const getAbilityModifiers = <TAbilities extends Partial<AbilityScores>>(abilityScores: TAbilities): TAbilities => {
  return Object.keys(abilityScores).reduce((result: TAbilities, key: string) => {
    const abilityScore = abilityScores[key]
    result[key] = getAbilityModifier(abilityScore)
    return result
  }, {} as TAbilities)
}

export const getAbilityScoreShortNameType = (abilityScoreType: Types.AbilityScoreTypes): Types.AbilityScoreShortNameTypes => {
  switch(abilityScoreType) {
    case Types.AbilityScoreTypes.Strength: return Types.AbilityScoreShortNameTypes.STR
    case Types.AbilityScoreTypes.Dexterity: return Types.AbilityScoreShortNameTypes.DEX
    case Types.AbilityScoreTypes.Constitution: return Types.AbilityScoreShortNameTypes.CON
    case Types.AbilityScoreTypes.Intelligence: return Types.AbilityScoreShortNameTypes.INT
    case Types.AbilityScoreTypes.Wisdom: return Types.AbilityScoreShortNameTypes.WIS
    case Types.AbilityScoreTypes.Charisma: return Types.AbilityScoreShortNameTypes.CHA
  }
}

export const getAbilityScoreType = (abilityScoreShortNameType: Types.AbilityScoreShortNameTypes): Types.AbilityScoreTypes => {
  switch(abilityScoreShortNameType) {
    case Types.AbilityScoreShortNameTypes.STR: return Types.AbilityScoreTypes.Strength
    case Types.AbilityScoreShortNameTypes.DEX: return Types.AbilityScoreTypes.Dexterity
    case Types.AbilityScoreShortNameTypes.CON: return Types.AbilityScoreTypes.Constitution
    case Types.AbilityScoreShortNameTypes.INT: return Types.AbilityScoreTypes.Intelligence
    case Types.AbilityScoreShortNameTypes.WIS: return Types.AbilityScoreTypes.Wisdom
    case Types.AbilityScoreShortNameTypes.CHA: return Types.AbilityScoreTypes.Charisma
  }
}
