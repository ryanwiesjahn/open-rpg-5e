import { Language } from '../../interfaces/Language'
import { DataBundle } from "../DataBundle"

const data: Language = {
  id: "144b0a4e-23b4-4fd7-879a-337042c166d8",
  language: "Common",
  typicalSpeakers: "Humans",
  script: "Common",
}

const dataBundle: DataBundle<Language> = {
  data,
  json: JSON.stringify(data),
}

export default dataBundle
