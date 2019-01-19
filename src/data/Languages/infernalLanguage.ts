import { Language } from '../../interfaces/Language'
import { DataBundle } from "../DataBundle"

const data: Language = {
  id: "09f758fc-5a96-4219-92b4-72a4b5c753c0",
  language: "Infernal",
  typicalSpeakers: "Devils",
  script: "Infernal",
}

const dataBundle: DataBundle<Language> = {
  data,
  json: JSON.stringify(data),
}

export default dataBundle
