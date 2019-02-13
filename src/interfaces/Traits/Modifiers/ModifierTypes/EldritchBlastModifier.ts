import { ModifierTypes } from "../ModifierTypes"
import * as ModifierSubTypes from "../ModifierSubTypes"
import { Modifier } from "../Modifier"

export interface EldritchBlastModifier extends Modifier<ModifierTypes.EldritchBlast> {
  subType: ModifierSubTypes.EldritchBlastModifierSubType
  amount: number
}
