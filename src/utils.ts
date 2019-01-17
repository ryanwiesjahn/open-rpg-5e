import { AbilityScores } from "./interfaces/Stats/AbilityScores"

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
