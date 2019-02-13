import { ModifierTypes } from "../ModifierTypes"
import * as ModifierSubTypes from "../ModifierSubTypes"
import { Modifier } from "../Modifier"
import * as Types from "../../../Types"

export interface DisadvantageModifier extends Modifier<ModifierTypes.Advantage> {
  subType: ModifierSubTypes.AdvantageModifierSubType
  change: Types.ChangeTypes
}
