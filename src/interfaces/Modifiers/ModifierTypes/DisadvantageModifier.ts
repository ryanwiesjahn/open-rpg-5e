import { ModifierTypes } from "../ModifierTypes"
import * as ModifierSubTypes from "../ModifierSubTypes"
import { Modifier } from "../Modifier"

export interface DisadvantageModifier extends Modifier<ModifierTypes.Advantage> {
  type: ModifierTypes.Advantage
  subType: ModifierSubTypes.AdvantageModifierSubType
}
