import { ModifierTypes } from "../ModifierTypes"
import * as ModifierSubTypes from "../ModifierSubTypes"
import { Modifier } from "../Modifier"
import * as Types from "../../Types"

export interface ProficiencyModifier extends Modifier<ModifierTypes.Proficiency> {
  type: ModifierTypes.Proficiency
  subType: ModifierSubTypes.ProficiencyModifierSubType
  proficiencyType: Types.ProficiencyTypes
}
