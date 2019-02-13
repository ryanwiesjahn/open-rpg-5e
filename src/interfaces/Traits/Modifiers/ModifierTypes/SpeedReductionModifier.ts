import { ModifierTypes } from "../ModifierTypes"
import * as ModifierSubTypes from "../ModifierSubTypes"
import { Modifier } from "../Modifier"

export interface SpeedReductionModifier extends Modifier<ModifierTypes.SpeedReduction> {
  subType: ModifierSubTypes.SpeedReductionModifierSubType
}
