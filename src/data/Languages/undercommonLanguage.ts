import { Language } from '../../interfaces/Language'
import { DataBundle } from "../DataBundle"

const data: Language = {
  id: "4d65c49b-4246-4a7e-9227-3460d43e9f34",
  language: "Undercommon",
  typicalSpeakers: "Underworld traders",
  script: "Elvish",
}

export const undercommonLanguage: DataBundle<Language> = {
  data,
  json: JSON.stringify(data),
}
