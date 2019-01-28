import { ModifierTypes } from "../ModifierTypes"
import * as ModifierSubTypes from "../ModifierSubTypes"
import { Modifier } from "../Modifier"

export interface NaturalWeaponModifier extends Modifier<ModifierTypes.NaturalWeapon> {
  // TODO: What is this? What needs to go here?
  subType: ModifierSubTypes.NaturalWeaponModifierSubType
}
