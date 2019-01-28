import { ModifierTypes } from "../ModifierTypes"
import * as ModifierSubTypes from "../ModifierSubTypes"
import { Modifier } from "../Modifier"

export interface RangedWeaponAttackModifier extends Modifier<ModifierTypes.RangedWeaponAttack> {
  // TODO: What else needs to be here?
  subType: ModifierSubTypes.RangedWeaponAttackModifierSubType
}
