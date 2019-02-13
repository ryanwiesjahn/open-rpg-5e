import { ModifierTypes } from "../ModifierTypes"
import * as ModifierSubTypes from "../ModifierSubTypes"
import { Modifier } from "../Modifier"
import * as Types from "../../Types"

export interface ReplaceDamageTypeModifier extends Modifier<ModifierTypes.ReplaceDamageType> {
  subType: ModifierSubTypes.ReplaceDamageTypeModifierSubType
  replaceWith: Types.DamageTypes
}
