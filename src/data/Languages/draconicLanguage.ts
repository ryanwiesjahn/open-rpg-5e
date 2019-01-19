import { Language } from '../../interfaces/Language'
import { DataBundle } from "../DataBundle"

const data: Language = {
  id: "670e6d3e-3133-4462-8e5f-035610ccd2ca",
  language: "Draconic",
  typicalSpeakers: "Dragons, dragonborn",
  script: "Draconic",
}

const dataBundle: DataBundle<Language> = {
  data,
  json: JSON.stringify(data),
}

export default dataBundle
