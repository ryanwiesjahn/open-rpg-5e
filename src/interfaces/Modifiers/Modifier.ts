import * as ModifierSubTypes from "./ModifierSubTypes"
import * as ModifierTypes from "./ModifierTypes"
import * as Types from "../Types"

export interface _Modifier<TType extends Types.ModifierTypes> {
  type: TType
  subType: _ModifierSubType<TType>
}

export type _ModifierSubType<TType>
  = TType extends Types.ModifierTypes.Bonus ? ModifierSubTypes.BonusModifierSubType
  : TType extends Types.ModifierTypes.Damage ? ModifierSubTypes.DamageModifierSubType
  : TType extends Types.ModifierTypes.Advantage ? ModifierSubTypes.AdvantageModifierSubType
  : TType extends Types.ModifierTypes.Disadvantage ? ModifierSubTypes.AdvantageModifierSubType
  : TType extends Types.ModifierTypes.Resistance ? ModifierSubTypes.DamageModifierSubType
  : TType extends Types.ModifierTypes.Immunity ? ModifierSubTypes.ImmunityModifierSubType
  : TType extends Types.ModifierTypes.Vulnerability ? ModifierSubTypes.VulnerabilityModifierSubType
  : TType extends Types.ModifierTypes.Sense ? ModifierSubTypes.SenseModifierSubType
  : TType extends Types.ModifierTypes.Set ? ModifierSubTypes.SetModifierSubType
  : TType extends Types.ModifierTypes.SetBase ? ModifierSubTypes.SetBaseModifierSubType
  : TType extends Types.ModifierTypes.Language ? ModifierSubTypes.LanguageModifierSubType
  : TType extends Types.ModifierTypes.Proficiency ? ModifierSubTypes.ProficiencyModifierSubType
  : TType extends Types.ModifierTypes.Expertise ? ModifierSubTypes.ExpertiseModifierSubType
  : TType extends Types.ModifierTypes.Feat ? ModifierSubTypes.FeatModifierSubType
  : TType extends Types.ModifierTypes.CarryingCapacity ? ModifierSubTypes.CarryingCapacityModifierSubType
  : TType extends Types.ModifierTypes.NaturalWeapon ? ModifierSubTypes.NaturalWeaponModifierSubType
  : TType extends Types.ModifierTypes.SpeedReduction ? ModifierSubTypes.SpeedReductionModifierSubType
  : TType extends Types.ModifierTypes.MeleeWeaponAttack ? ModifierSubTypes.MeleeWeaponAttackModifierSubType
  : TType extends Types.ModifierTypes.RangedWeaponAttack ? ModifierSubTypes.RangedWeaponAttackModifierSubType
  : TType extends Types.ModifierTypes.WeaponProperty ? ModifierSubTypes.WeaponPropertyModifierSubType
  : TType extends Types.ModifierTypes.FavoredEnemy ? ModifierSubTypes.FavoredEnemyModifierSubType
  : TType extends Types.ModifierTypes.Ignore ? ModifierSubTypes.IgnoreModifierSubType
  : TType extends Types.ModifierTypes.EldritchBlast ? ModifierSubTypes.EldritchBlastModifierSubType
  : TType extends Types.ModifierTypes.ReplaceDamageType ? ModifierSubTypes.ReplaceDamageTypeModifierSubType
  // : TType extends Types.ModifierTypes.Protection ? undefined   // TODO: How is this used?
  : TType extends Types.ModifierTypes.StackingBonus ? ModifierSubTypes.StackingBonusModifierSubType
  : null

export type Modifier
  = ModifierTypes.BonusModifier
  | ModifierTypes.DamageModifier
  | ModifierTypes.AdvantageModifier
  | ModifierTypes.DisadvantageModifier
  | ModifierTypes.ResistanceModifier
  | ModifierTypes.ImmunityModifier
  | ModifierTypes.VulnerabilityModifier
  | ModifierTypes.SenseModifier
  | ModifierTypes.SetModifier
  | ModifierTypes.SetBaseModifier
  | ModifierTypes.LanguageModifier
  | ModifierTypes.ProficiencyModifier
  | ModifierTypes.ExpertiseModifier
  | ModifierTypes.FeatModifier
  | ModifierTypes.CarryingCapacityModifier
  | ModifierTypes.NaturalWeaponModifier
  | ModifierTypes.SpeedReductionModifier
  | ModifierTypes.MeleeWeaponAttackModifier
  | ModifierTypes.RangedWeaponAttackModifier
  | ModifierTypes.WeaponPropertyModifier
  | ModifierTypes.FavoredEnemyModifier
  | ModifierTypes.IgnoreModifier
  | ModifierTypes.EldritchBlastModifier
  | ModifierTypes.ReplaceDamageTypeModifier
  // | ModifierTypes.ProtectionModifier
  | ModifierTypes.StackingBonusModifier
