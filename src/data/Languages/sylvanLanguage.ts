import { Language } from '../../interfaces/Language'
import { DataBundle } from "../DataBundle"

const data: Language = {
  id: "277401a9-5346-486a-96fb-c609bb80c0ed",
  language: "Sylvan",
  typicalSpeakers: "Fey creatures",
  script: "Elvish",
}

export const sylvanLanguage: DataBundle<Language> = {
  data,
  json: JSON.stringify(data),
}
