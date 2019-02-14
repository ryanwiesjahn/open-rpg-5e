import * as ModifierSubTypes from "../ModifierSubTypes"
import { _Modifier } from "../Modifier"
import * as Types from "../../../Types"

export interface RangedWeaponAttackModifier extends _Modifier<Types.ModifierTypes.RangedWeaponAttack> {
  // TODO: What else needs to be here?
  subType: ModifierSubTypes.RangedWeaponAttackModifierSubType
}
