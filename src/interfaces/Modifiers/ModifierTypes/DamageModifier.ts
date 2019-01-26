import { ModifierTypes } from "../ModifierTypes"
import * as ModifierSubTypes from "../ModifierSubTypes"
import { Modifier } from "../Modifier"

export interface DamageModifier extends Modifier<ModifierTypes.Damage> {
  type: ModifierTypes.Damage
  subType: ModifierSubTypes.DamageModifierSubType
}
