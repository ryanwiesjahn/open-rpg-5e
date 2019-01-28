import { ModifierTypes } from "../ModifierTypes"
import * as ModifierSubTypes from "../ModifierSubTypes"
import { Modifier } from "../Modifier"
import { Roll } from '../../Measurements/Roll';

export interface DamageModifier extends Modifier<ModifierTypes.Damage> {
  subType: ModifierSubTypes.DamageModifierSubType
  // TODO: Is this right?
  // At least 1, except for Types.DamageTypes
  amount?: number
  roll?: Roll
}
