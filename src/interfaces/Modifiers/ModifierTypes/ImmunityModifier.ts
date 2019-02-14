import * as ModifierSubTypes from "../ModifierSubTypes"
import { _Modifier } from "../Modifier"
import * as Types from "../../Types"

export interface ImmunityModifier extends _Modifier<Types.ModifierTypes.Immunity> {
  subType: ModifierSubTypes.ImmunityModifierSubType
}
