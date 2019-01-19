import { Language } from '../../interfaces/Language'
import { DataBundle } from "../DataBundle"

const data: Language = {
  id: "efec2580-779d-47ad-a111-fba5e4a0c420",
  language: "Gnomish",
  typicalSpeakers: "Gnomes",
  script: "Dwarvish",
}

const dataBundle: DataBundle<Language> = {
  data,
  json: JSON.stringify(data),
}

export default dataBundle
