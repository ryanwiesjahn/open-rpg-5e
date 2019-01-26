import { ModifierTypes } from "../ModifierTypes"
import * as ModifierSubTypes from "../ModifierSubTypes"
import { Modifier } from "../Modifier"

export interface ResistanceModifier extends Modifier<ModifierTypes.Damage> {
  type: ModifierTypes.Damage
  subType: ModifierSubTypes.DamageModifierSubType
}
