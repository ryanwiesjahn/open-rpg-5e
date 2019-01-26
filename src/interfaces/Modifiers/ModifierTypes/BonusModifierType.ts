import { ModifierTypes } from "../ModifierTypes"
import * as ModifierSubTypes from "../ModifierSubTypes"
import { Modifier } from "../Modifier"

export interface BonusModifier extends Modifier<ModifierTypes.Bonus> {
  type: ModifierTypes.Bonus
  subType: ModifierSubTypes.BonusModifierSubType
}
