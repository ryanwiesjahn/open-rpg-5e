import * as Types from "../Types"

export type BonusModifierSubType
  = Types.AbilityScoreTypes
  | Types.AbilityChecks
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
  | Types.RangeTypes
  | Types.MiscTypes
  | "choose-ability-score"   // TODO: Make this work

export type ChooseAbilityScores = Array<Types.AbilityScoreTypes>

/* Test */
const testChooseAbilityScores: ChooseAbilityScores = [Types.AbilityScoreTypes.Charisma]
