import { Language } from '../../interfaces/Language'
import { DataBundle } from "../DataBundle"

const data: Language = {
  id: "17a518c1-7111-4f7c-a3fa-8a6e40f14c87",
  language: "Deep Speech",
  typicalSpeakers: "Aboleths, cloakers",
  script: " -- ",
}

export const deepSpeechLanguage: DataBundle<Language> = {
  data,
  json: JSON.stringify(data),
}
