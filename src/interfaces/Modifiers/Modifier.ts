import * as ModifierSubTypes from "./ModifierSubTypes"
import { ModifierTypes } from "./ModifierTypes"
import * as Types from "../Types"

export interface Modifier<TType extends ModifierTypes> {
  type: TType
  subType: ModifierSubType<TType>
}

export type ModifierSubType<TType>
  = TType extends ModifierTypes.Bonus ? ModifierSubTypes.BonusModifierSubType
  : TType extends ModifierTypes.Damage ? ModifierSubTypes.DamageModifierSubType
  : TType extends ModifierTypes.Advantage ? ModifierSubTypes.AdvantageModifierSubType
  : TType extends ModifierTypes.Disadvantage ? ModifierSubTypes.AdvantageModifierSubType
  : TType extends ModifierTypes.Resistance ? ModifierSubTypes.DamageModifierSubType
  : TType extends ModifierTypes.Immunity ? ModifierSubTypes.ImmunityModifierSubType
  : TType extends ModifierTypes.Vulnerability ? ModifierSubTypes.VulnerabilityModifierSubType
  : TType extends ModifierTypes.Sense ? ModifierSubTypes.SenseModifierSubType
  : TType extends ModifierTypes.Set ? ModifierSubTypes.SetModifierSubType
  : TType extends ModifierTypes.SetBase ? ModifierSubTypes.SetBaseModifierSubType
  : TType extends ModifierTypes.Language ? ModifierSubTypes.LanguageModifierSubType
  : TType extends ModifierTypes.Proficiency ? ModifierSubTypes.ProficiencyModifierSubType
  : TType extends ModifierTypes.HalfProficiency ? ModifierSubTypes.ProficiencyModifierSubType
  : TType extends ModifierTypes.HalfProficiencyRoundUp ? ModifierSubTypes.ProficiencyModifierSubType
  : TType extends ModifierTypes.TwiceProficiency ? ModifierSubTypes.ProficiencyModifierSubType
  : TType extends ModifierTypes.Expertise ? ModifierSubTypes.ExpertiseModifierSubType
  : TType extends ModifierTypes.Feat ? ModifierSubTypes.FeatModifierSubType
  : TType extends ModifierTypes.CarryingCapacity ? ModifierSubTypes.CarryingCapacityModifierSubType
  : TType extends ModifierTypes.NaturalWeapon ? ModifierSubTypes.NaturalWeaponModifierSubType
  : TType extends ModifierTypes.SpeedReduction ? ModifierSubTypes.SpeedReductionModifierSubType
  : TType extends ModifierTypes.MeleeWeaponAttack ? ModifierSubTypes.MeleeWeaponAttackModifierSubType
  : TType extends ModifierTypes.RangedWeaponAttack ? ModifierSubTypes.RangedWeaponAttackModifierSubType
  : TType extends ModifierTypes.WeaponProperty ? ModifierSubTypes.WeaponPropertyModifierSubType
  : TType extends ModifierTypes.FavoredEnemy ? ModifierSubTypes.FavoredEnemyModifierSubType
  : TType extends ModifierTypes.Ignore ? ModifierSubTypes.IgnoreModifierSubType
  : TType extends ModifierTypes.EldritchBlast ? ModifierSubTypes.EldritchBlastModifierSubType
  : TType extends ModifierTypes.ReplaceDamageType ? ModifierSubTypes.ReplaceDamageTypeModifierSubType
  : TType extends ModifierTypes.Protection ? undefined   // TODO: How is this used?
  : TType extends ModifierTypes.StackingBonus ? ModifierSubTypes.StackingBonusModifierSubType
  : null

/* Test */
const testModifer: Modifier<ModifierTypes.Bonus> = {
  type: ModifierTypes.Bonus,
  subType: Types.SkillTypes.Stealth,
}
