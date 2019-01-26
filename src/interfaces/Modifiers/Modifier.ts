import * as SubTypes from "./SubTypes"
import * as Types from "../Types"

export interface Modifier<TType extends Types.ModifierTypes> {
  type: TType
  subType: ModifierSubType<TType>
}

export type ModifierSubType<TType>
  = TType extends Types.ModifierTypes.Bonus ? SubTypes.BonusModifierSubType
  : TType extends Types.ModifierTypes.Damage ? SubTypes.DamageModifierSubType
  : TType extends Types.ModifierTypes.Advantage ? SubTypes.AdvantageModifierSubType
  : TType extends Types.ModifierTypes.Disadvantage ? SubTypes.AdvantageModifierSubType
  : TType extends Types.ModifierTypes.Resistance ? SubTypes.DamageModifierSubType
  : TType extends Types.ModifierTypes.Immunity ? SubTypes.ImmunityModifierSubType
  : TType extends Types.ModifierTypes.Vulnerability ? SubTypes.VulnerabilityModifierSubType
  : TType extends Types.ModifierTypes.Sense ? SubTypes.SenseModifierSubType
  : TType extends Types.ModifierTypes.Set ? SubTypes.SetModifierSubType
  : TType extends Types.ModifierTypes.Language ? SubTypes.LanguageModifierSubType
  : TType extends Types.ModifierTypes.Proficiency ? SubTypes.ProficiencyModifierSubType
  : TType extends Types.ModifierTypes.HalfProficiency ? SubTypes.ProficiencyModifierSubType
  : TType extends Types.ModifierTypes.HalfProficiencyRoundUp ? SubTypes.ProficiencyModifierSubType
  : TType extends Types.ModifierTypes.TwiceProficiency ? SubTypes.ProficiencyModifierSubType
  : TType extends Types.ModifierTypes.Expertise ? SubTypes.ExpertiseModifierSubType
  : TType extends Types.ModifierTypes.Feat ? SubTypes.FeatModifierSubType
  : TType extends Types.ModifierTypes.CarryingCapacity ? SubTypes.CarryingCapacityModifierSubType
  : TType extends Types.ModifierTypes.NaturalWeapon ? undefined
  : TType extends Types.ModifierTypes.SpeedReduction ? undefined
  : TType extends Types.ModifierTypes.MeleeWeaponAttack ? undefined
  : TType extends Types.ModifierTypes.RangedWeaponAttack ? undefined
  : TType extends Types.ModifierTypes.WeaponProperty ? undefined
  : TType extends Types.ModifierTypes.FavoredEnemy ? undefined
  : TType extends Types.ModifierTypes.Ignore ? undefined
  : TType extends Types.ModifierTypes.EldritchBlast ? undefined
  : TType extends Types.ModifierTypes.ReplaceDamageType ? undefined
  : TType extends Types.ModifierTypes.Protection ? undefined
  : TType extends Types.ModifierTypes.StackingBonus ? undefined
  : null

/* Test */
const testModifer: Modifier<Types.ModifierTypes.Bonus> = {
  type: Types.ModifierTypes.Bonus,
  subType: Types.SkillTypes.Stealth,
}
