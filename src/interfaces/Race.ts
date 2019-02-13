import * as Types from "./Types"
import { AbilityScores } from "./Stats/AbilityScores"
import { Speed } from './Stats/Speed'

export interface RacialTrait {
  name: string
  snippet: string // Condensed, data-driven summary
  description: string
}

export interface Race {
  id: string
  version?: string
  name: string
  snippet?: string // Condensed, data-driven summary
  description: string
  abilityScoreIncreases: {
    abilityScores: Partial<AbilityScores>
    description: string
  }
  size: {
    racialSize: Types.RacialSizeTypes
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
  traits: RacialTrait[]
}
