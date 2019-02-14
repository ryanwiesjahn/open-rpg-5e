import * as ModifierSubTypes from "../ModifierSubTypes"
import { _Modifier } from "../Modifier"
import * as Types from "../../../Types"

export interface EldritchBlastModifier extends _Modifier<Types.ModifierTypes.EldritchBlast> {
  subType: ModifierSubTypes.EldritchBlastModifierSubType
  amount: number
}
