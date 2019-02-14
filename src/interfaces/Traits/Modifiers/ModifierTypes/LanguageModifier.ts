import * as ModifierSubTypes from "../ModifierSubTypes"
import { _Modifier } from "../Modifier"
import * as Types from "../../../Types"

interface _LanguageModifier<TSubType extends ModifierSubTypes.LanguageModifierSubType> extends _Modifier<Types.ModifierTypes.Language> {
  subType: TSubType
}

interface AllLanguageModifier extends _LanguageModifier<Types.SelectTypes.All> {}

// TODO: Make this work
interface ChooseLanguageModifier extends _LanguageModifier<Types.SelectTypes.Choose> {
  languageId: UUID
  languageChoiceIds: UUID[]
}

// TODO: Make this work
interface SpecificLanguageModifier extends _LanguageModifier<Types.SelectTypes.Specific> {
  languageId: UUID
}

export type LanguageModifier
  = AllLanguageModifier
  | ChooseLanguageModifier
  | SpecificLanguageModifier
