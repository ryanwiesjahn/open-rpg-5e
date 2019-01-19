import { Language } from '../../interfaces/Language'
import { DataBundle } from "../DataBundle"

const data: Language = {
  id: "15eafad4-4ad5-4dfe-885b-c2080f121911",
  language: "Primordial",
  typicalSpeakers: "Elementals",
  script: "Dwarvish",
}

const dataBundle: DataBundle<Language> = {
  data,
  json: JSON.stringify(data),
}

export default dataBundle
