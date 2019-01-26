import { ModifierTypes } from "../ModifierTypes"
import * as ModifierSubTypes from "../ModifierSubTypes"
import { Modifier } from "../Modifier"

export interface ImmunityModifier extends Modifier<ModifierTypes.Immunity> {
  type: ModifierTypes.Immunity
  subType: ModifierSubTypes.ImmunityModifierSubType
}
