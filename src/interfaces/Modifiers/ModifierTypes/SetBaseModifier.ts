import * as ModifierSubTypes from "../ModifierSubTypes"
import { _Modifier } from "../Modifier"
import * as Types from "../../Types"

export interface SetBaseModifier extends _Modifier<Types.ModifierTypes.SetBase> {
  subType: ModifierSubTypes.SetBaseModifierSubType
  // TODO: Anything else needed?
}
