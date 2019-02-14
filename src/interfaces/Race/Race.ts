import * as Types from "../Types"
import { AbilityScores } from "../Stats/AbilityScores"
import { Speed } from '../Stats/Speed'
import { RacialTrait } from './RacialTrait'

export interface Race {
  id: UUID
  version?: string
  name: string
  snippet?: string // Condensed, data-driven summary
  description: string
  abilityScoreIncreases: {
    abilityScores: Partial<AbilityScores>
    description: string
  }
  size: {
    racialSize: Types.CreatureSizeTypes
    description: string
  }
  age: string
  alignment: string
  speed: Speed
  languagesDescriptor: {
    languages: string[]
    description: string
  }
  darkvision: {
    hasDarkvision: boolean
    description: string
  }
  racialTraitIds: UUID[]
  variants?: any[]  // TODO: Figure this out
}
