import * as ModifierSubTypes from "../ModifierSubTypes"
import { _Modifier } from "../Modifier"
import * as Types from "../../Types"

export interface SetModifier extends _Modifier<Types.ModifierTypes.Set> {
  subType: ModifierSubTypes.SetModifierSubType
  amount: number
}
