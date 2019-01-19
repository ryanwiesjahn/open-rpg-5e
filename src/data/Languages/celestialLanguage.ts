import { Language } from '../../interfaces/Language'
import { DataBundle } from "../DataBundle"

const data: Language = {
  id: "d1fac066-45b3-461b-8345-ded791a58abb",
  language: "Celestial",
  typicalSpeakers: "Celestials",
  script: "Celestial",
}

const dataBundle: DataBundle<Language> = {
  data,
  json: JSON.stringify(data),
}

export default dataBundle
