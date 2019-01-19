import { Language } from '../../interfaces/Language'
import { DataBundle } from "../DataBundle"

const data: Language = {
  id: "4dde9bf9-0557-4690-8ef6-1b9edac8627e",
  language: "Dwarvish",
  typicalSpeakers: "Dwarves",
  script: "Dwarvish",
}

export const dwarvishLanguage: DataBundle<Language> = {
  data,
  json: JSON.stringify(data),
}
