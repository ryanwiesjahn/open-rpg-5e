import { ModifierTypes } from "../ModifierTypes"
import * as ModifierSubTypes from "../ModifierSubTypes"
import { Modifier } from "../Modifier"
import * as Types from "../../../Types"

type MainExpertiseModifierSubTypes
  = Types.AbilityCheckTypes
  | Types.SkillTypes
  | Types.OtherSkillTypes
  | Exclude<Types.SavingThrowTypes, Types.SavingThrowTypes.DeathSavingThrows>
  | Types.AttackTypes
  | Types.AbilityAttackTypes
  | Types.WeaponAttackTypes

export interface ExpertiseModifier extends Modifier<ModifierTypes.Expertise> {
  subType: MainExpertiseModifierSubTypes
}

// TODO: Make this work
export interface ChooseEquipmentExpertiseModifier extends Modifier<ModifierTypes.Expertise> {
  subType: Types.SelectTypes.ChooseEquipment
  equipmentId: UUID
  equipmentChoiceIds: UUID[]
}

// TODO: Make this work
export interface SpecificEquipmentExpertiseModifier extends Modifier<ModifierTypes.Expertise> {
  subType: Types.SelectTypes.SpecificEquipment
  equipmentId: UUID
}
