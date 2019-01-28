import { ModifierTypes } from "../ModifierTypes"
import * as ModifierSubTypes from "../ModifierSubTypes"
import { Modifier } from "../Modifier"

export interface MeleeWeaponAttackModifier extends Modifier<ModifierTypes.MeleeWeaponAttack> {
  // TODO: What else needs to be here?
  subType: ModifierSubTypes.MeleeWeaponAttackModifierSubType
}
