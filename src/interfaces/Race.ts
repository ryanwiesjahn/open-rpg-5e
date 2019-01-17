import { AbilityScores } from "./AbilityScores"

export interface RacialTrait {
  name: string
  snippet: string // Condensed, data-driven summary
  description: string
}

export enum RacialSize {
  Tiny = "tiny",
  Small = "small",
  Medium = "medium",
  Large = "large",
  Huge = "huge",
  Gargantuan = "gargantuan",
}

export interface Speed {
  walk?: number
  burrow?: number
  climb?: number
  swim?: number
  fly?: number
}

export interface Race {
  name: string
  snippet: string // Condensed, data-driven summary
  description: string
  abilityScoreIncreases: {
    abilityScores: Partial<AbilityScores>
    description: string
  }
  size: {
    racialSize: RacialSize
    description: string
  }
  age: string
  alignment: string
  speed: string
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
