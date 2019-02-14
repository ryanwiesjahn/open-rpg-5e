import * as ModifierSubTypes from "../ModifierSubTypes"
import { _Modifier } from "../Modifier"
import * as Types from "../../Types"

export interface ReplaceDamageTypeModifier extends _Modifier<Types.ModifierTypes.ReplaceDamageType> {
  subType: ModifierSubTypes.ReplaceDamageTypeModifierSubType
  replaceWith: Types.DamageTypes
}
