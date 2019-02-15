import * as Stats from '../Stats'
import { CharacterConfig } from "./CharacterConfig"
import { CharacterInventory } from './CharacterInventory'

export interface Character {
  id: UUID
  name: string
  config: CharacterConfig
  raceId: UUID
  classId: UUID
  subClassIds?: UUID[]
  abilityScores: Stats.AbilityScoresCalculations
  backgroundId: UUID
  inventory: CharacterInventory
}
