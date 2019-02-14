import { ModifierTypes } from "../ModifierTypes"
import * as ModifierSubTypes from "../ModifierSubTypes"
import { Modifier } from "../Modifier"
import * as Types from "../../../Types"

type MainProficiencyModifierSubTypes
  = Types.AbilityCheckTypes
  | Types.SkillTypes
  | Types.OtherSkillTypes
  | Exclude<Types.SavingThrowTypes, Types.SavingThrowTypes.DeathSavingThrows>
  | Types.AttackTypes
  | Types.AbilityAttackTypes
  | Types.WeaponAttackTypes
export interface ProficiencyModifier extends Modifier<ModifierTypes.Proficiency> {
  subType: MainProficiencyModifierSubTypes
  proficiencyType: Types.ProficiencyTypes
}

// TODO: Make this work
export interface ChooseEquipmentProficiencyModifier extends Modifier<ModifierTypes.Proficiency> {
  subType: Types.SelectTypes.Choose
  equipmentId: UUID
  equipmentChoiceIds: UUID[]
}

// TODO: Make this work
export interface SpecificEquipmentProficiencyModifier extends Modifier<ModifierTypes.Proficiency> {
  subType: Types.SelectTypes.Specific
  equipmentId: UUID
}
