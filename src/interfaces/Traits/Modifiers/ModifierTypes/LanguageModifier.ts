import { ModifierTypes } from "../ModifierTypes"
import * as ModifierSubTypes from "../ModifierSubTypes"
import { Modifier } from "../Modifier"
import * as Types from "../../../Types"

interface LanguageModifier<TSubType extends ModifierSubTypes.LanguageModifierSubType> extends Modifier<ModifierTypes.Language> {
  subType: TSubType
}

export interface AllLanguageModifier extends LanguageModifier<Types.SelectTypes.All> {}

// TODO: Make this work
export interface ChooseLanguageModifier extends LanguageModifier<Types.SelectTypes.ChooseLanguage> {
  languageId: string
  languageChoiceIds: string[]
}

// TODO: Make this work
export interface SpecificLanguageModifier extends LanguageModifier<Types.SelectTypes.SpecificLanguage> {
  languageId: string
}
