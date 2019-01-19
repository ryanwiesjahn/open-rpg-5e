import { Language } from '../../interfaces/Language'
import { DataBundle } from "../DataBundle"

const data: Language = {
  id: "d1fac066-45b3-461b-8345-ded791a58abb",
  language: "Celestial",
  typicalSpeakers: "Celestials",
  script: "Celestial",
}

export const celestialLanguage: DataBundle<Language> = {
  data,
  json: JSON.stringify(data),
}
