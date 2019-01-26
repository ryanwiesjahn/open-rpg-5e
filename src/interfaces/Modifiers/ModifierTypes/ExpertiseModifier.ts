import { ModifierTypes } from "../ModifierTypes"
import * as ModifierSubTypes from "../ModifierSubTypes"
import { Modifier } from "../Modifier"

export interface ExpertiseModifier extends Modifier<ModifierTypes.Expertise> {
  type: ModifierTypes.Expertise
  subType: ModifierSubTypes.ExpertiseModifierSubType
}
