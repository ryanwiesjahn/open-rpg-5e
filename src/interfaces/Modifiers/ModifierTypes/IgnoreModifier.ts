import * as ModifierSubTypes from "../ModifierSubTypes"
import { _Modifier } from "../Modifier"
import * as Types from "../../Types"

export interface IgnoreModifier extends _Modifier<Types.ModifierTypes.Ignore> {
  subType: ModifierSubTypes.IgnoreModifierSubType
}
