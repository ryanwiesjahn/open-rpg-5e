import * as General from './General'

// TODO: Do languages need ID pointers? Should they be un-normalized into things?
export interface Language extends General.Entry {
  language: string
  typicalSpeakers: string
  script: string
}
