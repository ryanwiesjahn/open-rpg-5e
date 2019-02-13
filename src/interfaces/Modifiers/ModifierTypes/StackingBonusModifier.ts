import { ModifierTypes } from "../ModifierTypes"
import * as ModifierSubTypes from "../ModifierSubTypes"
import { Modifier } from "../Modifier"

export interface StackingBonusModifier extends Modifier<ModifierTypes.StackingBonus> {
  subType: ModifierSubTypes.StackingBonusModifierSubType
  // TODO: Anything else needed?
}
