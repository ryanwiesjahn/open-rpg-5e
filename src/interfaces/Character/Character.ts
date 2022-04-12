import * as Stats from '../Stats'
import * as General from '../General'
import { CharacterConfig } from "./CharacterConfig"
import { CharacterInventory } from './CharacterInventory'

export interface Character extends General.Entry {
  name: string
  config: CharacterConfig
  raceId: UUID
  classId: UUID
  subClassIds?: UUID[]
  abilityScores: Stats.AbilityScoresCalculations
  backgroundId: UUID
  inventory: CharacterInventory
}
