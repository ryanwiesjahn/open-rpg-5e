import { ModifierTypes } from "../ModifierTypes"
import * as ModifierSubTypes from "../ModifierSubTypes"
import { Modifier } from "../Modifier"

export interface AdvantageModifier extends Modifier<ModifierTypes.Advantage> {
  type: ModifierTypes.Advantage
  subType: ModifierSubTypes.AdvantageModifierSubType
}
