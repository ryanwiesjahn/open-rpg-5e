import * as ModifierSubTypes from "../ModifierSubTypes"
import { _Modifier } from "../Modifier"
import * as Types from "../../../Types"

export interface ResistanceModifier extends _Modifier<Types.ModifierTypes.Damage> {
  subType: ModifierSubTypes.DamageModifierSubType
}
