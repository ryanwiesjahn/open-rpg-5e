
// TODO: Do languages need ID pointers? Should they be un-normalized into things?
export interface Language {
  id: UUID
  language: string
  typicalSpeakers: string
  script: string
}
