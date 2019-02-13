import { ModifierTypes } from "../ModifierTypes"
import * as ModifierSubTypes from "../ModifierSubTypes"
import { Modifier } from "../Modifier"

export interface SenseModifier extends Modifier<ModifierTypes.Sense> {
  subType: ModifierSubTypes.SenseModifierSubType
}
