import { ModifierTypes } from "../ModifierTypes"
import * as ModifierSubTypes from "../ModifierSubTypes"
import { Modifier } from "../Modifier"

export interface SetBaseModifier extends Modifier<ModifierTypes.SetBase> {
  subType: ModifierSubTypes.SetBaseModifierSubType
  // TODO: Anything else needed?
}
