import { CharacterConfig } from "./CharacterConfig"

export interface Character {
  id: UUID
  name: string
  config: CharacterConfig
  raceId: UUID
}
