import * as SubTypes from "./SubTypes"
import * as Types from "./Types"

export interface Modifier<TType extends Types.ModifierTypes> {
  type: TType
  subType: ModifierSubType<TType>
}

export type ModifierSubType<TType> = 
  TType extends Types.ModifierTypes.Bonus ? SubTypes.BonusModifierSubType : 
  TType extends Types.ModifierTypes.Damage ? SubTypes.DamageModifierSubType : 
  TType extends Types.ModifierTypes.Advantage ? SubTypes.AdvantageModifierSubType :
  TType extends Types.ModifierTypes.Disadvantage ? SubTypes.AdvantageModifierSubType :
  TType extends Types.ModifierTypes.Resistance ? SubTypes.DamageModifierSubType :
  TType extends Types.ModifierTypes.Immunity ? SubTypes.ImmunityModifierSubType :
  TType extends Types.ModifierTypes.Vulnerability ? undefined :
  TType extends Types.ModifierTypes.Sense ? undefined :
  TType extends Types.ModifierTypes.Set ? undefined :
  TType extends Types.ModifierTypes.Language ? undefined :
  TType extends Types.ModifierTypes.Proficiency ? undefined :
  TType extends Types.ModifierTypes.HalfProficiency ? undefined :
  TType extends Types.ModifierTypes.HalfProficiencyRoundUp ? undefined :
  TType extends Types.ModifierTypes.TwiceProficiency ? undefined :
  TType extends Types.ModifierTypes.Expertise ? undefined :
  TType extends Types.ModifierTypes.Feat ? undefined :
  TType extends Types.ModifierTypes.CarryingCapacity ? undefined :
  TType extends Types.ModifierTypes.NaturalWeapon ? undefined :
  TType extends Types.ModifierTypes.SpeedReduction ? undefined :
  TType extends Types.ModifierTypes.MeleeWeaponAttack ? undefined :
  TType extends Types.ModifierTypes.RangedWeaponAttack ? undefined :
  TType extends Types.ModifierTypes.WeaponProperty ? undefined :
  TType extends Types.ModifierTypes.FavoredEnemy ? undefined :
  TType extends Types.ModifierTypes.Ignore ? undefined :
  TType extends Types.ModifierTypes.EldritchBlast ? undefined :
  TType extends Types.ModifierTypes.ReplaceDamageType ? undefined :
  TType extends Types.ModifierTypes.Protection ? undefined :
  TType extends Types.ModifierTypes.StackingBonus ? undefined :
  null

/* Test */
const testModifer: Modifier<Types.ModifierTypes.Bonus> = {
  type: Types.ModifierTypes.Bonus,
  subType: Types.SkillTypes.Stealth,
}
