import { ModifierTypes } from "../ModifierTypes"
import * as ModifierSubTypes from "../ModifierSubTypes"
import { Modifier } from "../Modifier"

export interface FeatModifier extends Modifier<ModifierTypes.Feat> {
  type: ModifierTypes.Feat
  subType: ModifierSubTypes.FeatModifierSubType
}
