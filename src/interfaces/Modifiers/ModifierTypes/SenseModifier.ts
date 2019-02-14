import * as ModifierSubTypes from "../ModifierSubTypes"
import { _Modifier } from "../Modifier"
import * as Types from "../../Types"

export interface SenseModifier extends _Modifier<Types.ModifierTypes.Sense> {
  subType: ModifierSubTypes.SenseModifierSubType
}
