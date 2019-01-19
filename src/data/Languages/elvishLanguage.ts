import { Language } from '../../interfaces/Language'
import { DataBundle } from "../DataBundle"

const data: Language = {
  id: "a6a9c3cf-c4b9-47d3-a5c8-9afbb58f6501",
  language: "Elvish",
  typicalSpeakers: "Elves",
  script: "Elvish",
}

export const elvishLanguage: DataBundle<Language> = {
  data,
  json: JSON.stringify(data),
}
