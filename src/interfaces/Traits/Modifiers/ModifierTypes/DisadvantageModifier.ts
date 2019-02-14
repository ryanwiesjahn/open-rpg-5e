import * as ModifierSubTypes from "../ModifierSubTypes"
import { _Modifier } from "../Modifier"
import * as Types from "../../../Types"

export interface DisadvantageModifier extends _Modifier<Types.ModifierTypes.Advantage> {
  subType: ModifierSubTypes.AdvantageModifierSubType
  change: Types.ChangeTypes
}
