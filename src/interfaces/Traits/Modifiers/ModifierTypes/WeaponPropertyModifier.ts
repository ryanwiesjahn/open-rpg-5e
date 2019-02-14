import * as ModifierSubTypes from "../ModifierSubTypes"
import { _Modifier } from "../Modifier"
import * as Types from "../../../Types"

export interface WeaponPropertyModifier extends _Modifier<Types.ModifierTypes.WeaponProperty> {
  // TODO: What else needs to be here?
  subType: ModifierSubTypes.WeaponPropertyModifierSubType
}
