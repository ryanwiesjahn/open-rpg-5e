import { ModifierTypes } from "../ModifierTypes"
import * as ModifierSubTypes from "../ModifierSubTypes"
import { Modifier } from "../Modifier"
import * as Types from "../../Types"

export interface ExpertiseModifier extends Modifier<ModifierTypes.Expertise> {
  subType: ModifierSubTypes.ExpertiseModifierSubType
}

// TODO: Make this work
export interface ChooseEquipmentExpertiseModifier extends ExpertiseModifier {
  subType: Types.SelectTypes.ChooseEquipment
  equipmentId: string
  equipmentChoiceIds: string[]
}

// TODO: Make this work
export interface SpecificEquipmentExpertiseModifier extends ExpertiseModifier {
  subType: Types.SelectTypes.SpecificEquipment
  equipmentId: string
}
