import { ModifierTypes } from "../ModifierTypes"
import * as ModifierSubTypes from "../ModifierSubTypes"
import { Modifier } from "../Modifier"

export interface SetModifier extends Modifier<ModifierTypes.Set> {
  type: ModifierTypes.Set
  subType: ModifierSubTypes.SetModifierSubType
}
