import * as ModifierSubTypes from "../ModifierSubTypes"
import { _Modifier } from "../Modifier"
import * as Types from "../../Types"

export interface StackingBonusModifier extends _Modifier<Types.ModifierTypes.StackingBonus> {
  subType: ModifierSubTypes.StackingBonusModifierSubType
  // TODO: Anything else needed?
}
