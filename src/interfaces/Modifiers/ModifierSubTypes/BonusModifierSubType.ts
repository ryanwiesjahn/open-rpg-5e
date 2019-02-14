import * as Types from "../../Types"

export type BonusModifierSubType
  = Types.AbilityScoreTypes
  | Types.AbilityCheckTypes
  | Types.AbilityAttackTypes
  | Types.SavingThrowTypes
  | Types.SkillTypes
  | Types.OtherSkillTypes
  | Types.ArmorClassTypes
  | Types.HitPointTypes
  | Types.PassiveSkillTypes
  | Types.SpeedTypes
  | Types.AttackTypes
  | Types.WeaponAttackTypes
  | Types.ProficiencyTypes
  | Types.OtherProficiencyTypes
  | Types.RangeTypes
  | Types.MiscTypes
  | Types.SelectTypes.Choose

export type ChooseAbilityScores = Array<Types.AbilityScoreTypes>

/* Test */
const testChooseAbilityScores: ChooseAbilityScores = [Types.AbilityScoreTypes.Charisma]
