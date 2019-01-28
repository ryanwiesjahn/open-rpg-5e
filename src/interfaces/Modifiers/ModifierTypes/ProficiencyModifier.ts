import { ModifierTypes } from "../ModifierTypes"
import * as ModifierSubTypes from "../ModifierSubTypes"
import { Modifier } from "../Modifier"
import * as Types from "../../Types"

export interface ProficiencyModifier extends Modifier<ModifierTypes.Proficiency> {
  subType: ModifierSubTypes.ProficiencyModifierSubType
  proficiencyType: Types.ProficiencyTypes
}

// TODO: Make this work
export interface ChooseEquipmentProficiencyModifier extends ProficiencyModifier {
  subType: Types.SelectTypes.ChooseEquipment
  equipmentId: string
  equipmentChoiceIds: string[]
}

// TODO: Make this work
export interface SpecificEquipmentProficiencyModifier extends ProficiencyModifier {
  subType: Types.SelectTypes.SpecificEquipment
  equipmentId: string
}
