import { Language } from '../../interfaces/Language'
import { DataBundle } from "../DataBundle"

const data: Language = {
  id: "a5a20541-8d63-49c8-b673-9a21cba5ea5b",
  language: "Halfling",
  typicalSpeakers: "Halflings",
  script: "Common",
}

const dataBundle: DataBundle<Language> = {
  data,
  json: JSON.stringify(data),
}

export default dataBundle
