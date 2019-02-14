import * as ModifierSubTypes from "../ModifierSubTypes"
import { _Modifier } from "../Modifier"
import * as Types from "../../Types"

type MainProficiencyModifierSubTypes
  = Types.AbilityCheckTypes
  | Types.SkillTypes
  | Types.OtherSkillTypes
  | Exclude<Types.SavingThrowTypes, Types.SavingThrowTypes.DeathSavingThrows>
  | Types.AttackTypes
  | Types.AbilityAttackTypes
  | Types.WeaponAttackTypes

interface _ProficiencyModifier<TSubType extends ModifierSubTypes.ProficiencyModifierSubType> extends _Modifier<Types.ModifierTypes.Proficiency> {
  subType: TSubType
}

interface MainProficiencyModifier extends _ProficiencyModifier<MainProficiencyModifierSubTypes> {
  proficiencyType: Types.ProficiencyTypes
}

// TODO: Make this work
interface ChooseEquipmentProficiencyModifier extends _ProficiencyModifier<Types.SelectTypes.Choose> {
  proficiencyType: Types.ProficiencyTypes
  equipmentId: UUID
  equipmentChoiceIds: UUID[]
}

// TODO: Make this work
interface SpecificEquipmentProficiencyModifier extends _ProficiencyModifier<Types.SelectTypes.Specific> {
  proficiencyType: Types.ProficiencyTypes
  equipmentId: UUID
}

export type ProficiencyModifier
  = MainProficiencyModifier
  | ChooseEquipmentProficiencyModifier
  | SpecificEquipmentProficiencyModifier
