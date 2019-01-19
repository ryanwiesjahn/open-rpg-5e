import { Language } from '../../interfaces/Language'
import { DataBundle } from "../DataBundle"

const data: Language = {
  id: "643b04cb-0572-4f28-ab22-709969b34609",
  language: "Orc",
  typicalSpeakers: "Orcs",
  script: "Dwarvish",
}

const dataBundle: DataBundle<Language> = {
  data,
  json: JSON.stringify(data),
}

export default dataBundle
