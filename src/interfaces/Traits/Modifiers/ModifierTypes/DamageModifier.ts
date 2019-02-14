import * as ModifierSubTypes from "../ModifierSubTypes"
import { _Modifier } from "../Modifier"
import * as Measurements from '../../../Measurements'
import * as Types from "../../../Types"

export interface DamageModifier extends _Modifier<Types.ModifierTypes.Damage> {
  subType: ModifierSubTypes.DamageModifierSubType
  // TODO: Is this right?
  // At least 1, except for Types.DamageTypes
  amount?: number
  roll?: Measurements.Roll
}
