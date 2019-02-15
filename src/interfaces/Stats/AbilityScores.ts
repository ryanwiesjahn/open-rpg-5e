
export interface AbilityScores {
  strength: number
  dexterity: number
  constitution: number
  intelligence: number
  wisdom: number
  charisma: number
}

interface AbilityScoresCalculation {
  base: number
  otherModifier?: number
  overrideScore?: number
}

export interface AbilityScoresCalculations {
  strength: AbilityScoresCalculation
  dexterity: AbilityScoresCalculation
  constitution: AbilityScoresCalculation
  intelligence: AbilityScoresCalculation
  wisdom: AbilityScoresCalculation
  charisma: AbilityScoresCalculation
}
