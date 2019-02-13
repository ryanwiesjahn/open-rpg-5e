import { ModifierTypes } from "../ModifierTypes"
import * as ModifierSubTypes from "../ModifierSubTypes"
import { Modifier } from "../Modifier"

export interface IgnoreModifier extends Modifier<ModifierTypes.Ignore> {
  subType: ModifierSubTypes.IgnoreModifierSubType
}
