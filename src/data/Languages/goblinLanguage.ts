import { Language } from '../../interfaces/Language'
import { DataBundle } from "../DataBundle"

const data: Language = {
  id: "04defdb8-4d5c-4786-8249-ac30578533f6",
  language: "Goblin",
  typicalSpeakers: "Goblinoids",
  script: "Dwarvish",
}

export const goblinLanguage: DataBundle<Language> = {
  data,
  json: JSON.stringify(data),
}
