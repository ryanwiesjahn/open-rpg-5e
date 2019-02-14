import * as ModifierSubTypes from "../ModifierSubTypes"
import { _Modifier } from "../Modifier"
import * as Types from "../../Types"

export interface MeleeWeaponAttackModifier extends _Modifier<Types.ModifierTypes.MeleeWeaponAttack> {
  // TODO: What else needs to be here?
  subType: ModifierSubTypes.MeleeWeaponAttackModifierSubType
}
