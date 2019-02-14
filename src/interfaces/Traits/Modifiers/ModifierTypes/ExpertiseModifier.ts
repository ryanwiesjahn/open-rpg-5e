import * as ModifierSubTypes from "../ModifierSubTypes"
import { _Modifier } from "../Modifier"
import * as Types from "../../../Types"

type MainExpertiseModifierSubTypes
  = Types.AbilityCheckTypes
  | Types.SkillTypes
  | Types.OtherSkillTypes
  | Exclude<Types.SavingThrowTypes, Types.SavingThrowTypes.DeathSavingThrows>
  | Types.AttackTypes
  | Types.AbilityAttackTypes
  | Types.WeaponAttackTypes

interface _ExpertiseModifier<TSubType extends ModifierSubTypes.ExpertiseModifierSubType> extends _Modifier<Types.ModifierTypes.Expertise> {
  subType: TSubType
}

interface MainExpertiseModifier extends _ExpertiseModifier<MainExpertiseModifierSubTypes> {}

// TODO: Make this work
interface ChooseEquipmentExpertiseModifier extends _ExpertiseModifier<Types.SelectTypes.Choose> {
  equipmentId: UUID
  equipmentChoiceIds: UUID[]
}

// TODO: Make this work
interface SpecificEquipmentExpertiseModifier extends _ExpertiseModifier<Types.SelectTypes.Specific> {
  equipmentId: UUID
}

export type ExpertiseModifier
  = MainExpertiseModifier
  | ChooseEquipmentExpertiseModifier
  | SpecificEquipmentExpertiseModifier
