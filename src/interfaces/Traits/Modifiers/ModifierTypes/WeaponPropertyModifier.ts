import { ModifierTypes } from "../ModifierTypes"
import * as ModifierSubTypes from "../ModifierSubTypes"
import { Modifier } from "../Modifier"

export interface WeaponPropertyModifier extends Modifier<ModifierTypes.WeaponProperty> {
  // TODO: What else needs to be here?
  subType: ModifierSubTypes.WeaponPropertyModifierSubType
}
