import * as ModifierSubTypes from "../ModifierSubTypes"
import { _Modifier } from "../Modifier"
import * as Types from "../../../Types"

export interface NaturalWeaponModifier extends _Modifier<Types.ModifierTypes.NaturalWeapon> {
  // TODO: What is this? What needs to go here?
  subType: ModifierSubTypes.NaturalWeaponModifierSubType
}
