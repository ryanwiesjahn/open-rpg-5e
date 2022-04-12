import * as Types from '../Types'
import * as Values from '../Values'
import * as General from '../General'
import { BackgroundEquipmentGroup } from './BackgroundEquipmentGroup'

export interface BackgroundSkillProficiencyModifier {
  skillChoices: Types.SkillTypes[]
}

export interface BackgroundToolProficiencyModifier {
  choiceIds: UUID[]
}

export interface BackgroundLanguageModifier {
  choiceIds: UUID[]
}

export interface BackgroundEquipmentChoice {
  name: string
  equipmentGroups: BackgroundEquipmentGroup[]
}

export interface BackgroundSuggestedCharacteristics {
  [Types.CharacteristicTypes.PersonalityTrait]: string[]
  [Types.CharacteristicTypes.Ideal]: string[]
  [Types.CharacteristicTypes.Bond]: string[]
  [Types.CharacteristicTypes.Flaw]: string[]
}

export interface BackgroundContacts {
  [Types.ContactTypes.Contact]: string[]
  [Types.ContactTypes.NonContact]: string[]
}

export interface Background extends General.Entry {
  name: string
  introduction: string
  skillProficienciesDescription?: string
  toolProficienciesDescription?: string
  languagesDescription?: string
  equipmentDescription?: string
  backgroundSpecificTable?: Partial<General.Descriptor>
  feature?: Partial<General.Descriptor>
  variant?: Partial<General.Descriptor>
  variantFeature?: Partial<General.Descriptor>
  suggestedCharacteristicsDescription: string
  spellListIntroductionDescription?: string
  additionalSpellIds?: UUID[]
  spellListExtendedDescription?: string
  contactsDescription?: string
  backgroundTags: Values.Tags[]
  skillProficiencies?: BackgroundSkillProficiencyModifier[]
  toolProficiencies?: BackgroundToolProficiencyModifier[]
  languages?: BackgroundLanguageModifier[]
  equipmentChoices?: BackgroundEquipmentChoice[]
  backgroundSpecificChoices?: string[]
  suggestedCharacteristics?: BackgroundSuggestedCharacteristics
  contacts?: BackgroundContacts
}
