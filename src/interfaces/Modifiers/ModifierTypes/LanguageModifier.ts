import { ModifierTypes } from "../ModifierTypes"
import * as ModifierSubTypes from "../ModifierSubTypes"
import { Modifier } from "../Modifier"

export interface LanguageModifier extends Modifier<ModifierTypes.Language> {
  type: ModifierTypes.Language
  subType: ModifierSubTypes.LanguageModifierSubType
}
