import { Language } from '../../interfaces/Language'
import { DataBundle } from "../DataBundle"

const data: Language = {
  id: "0feb36d5-04f9-444c-b941-273e89aba3b8",
  language: "Giant",
  typicalSpeakers: "Ogres, giants",
  script: "Dwarvish",
}

const dataBundle: DataBundle<Language> = {
  data,
  json: JSON.stringify(data),
}

export default dataBundle
