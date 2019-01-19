import { Language } from '../../interfaces/Language'
import { DataBundle } from "../DataBundle"

const data: Language = {
  id: "1bce36eb-0295-43bc-8049-c8046b3b7b80",
  language: "Abyssal",
  typicalSpeakers: "Demons",
  script: "Infernal",
}

export const abyssalLanguage: DataBundle<Language> = {
  data,
  json: JSON.stringify(data),
}
