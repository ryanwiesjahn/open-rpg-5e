import * as SubTypes from "./SubTypes/"

export interface Modifier<TType extends ModifierType> {
  type: TType
  subType: ModifierSubType<TType>
}

export enum ModifierType {
  Bonus = "bonus",
  Damage = "damage",
  Advantage = "advantage",
  Disadvantage = "disadvantage",
  Resistance = "resistance",
  Immunity = "immunity",
  Vulnerability = "vulnerability",
  Sense = "sense",
  Set = "set",
  Language = "language",
  Proficiency = "proficiency",
  HalfProficiency = "half-proficiency",
  HalfProficiencyRoundUp = "half-proficiency-round-up",
  TwiceProficiency = "twice-proficiency",
  Expertise = "expertise",
  Feat = "feat",
  CarryingCapacity = "carrying-capacity",
  NaturalWeapon = "natural-weapon",
  // StealthDisadvantage = "stealth-disadvantage",   // Copied from DnDB. Will Disadvantage with subType Stealth not work?
  SpeedReduction = "speed-reduction",
  MeleeWeaponAttack = "melee-weapon-attack",
  RangedWeaponAttack = "ranged-weapon-attack",
  WeaponProperty = "weapon-property",
  FavoredEnemy = "favored-enemy",
  Ignore = "ignore",
  EldritchBlast = "eldritch-blast",   // Copied from DnDB. This seems random.
  ReplaceDamageType = "replace-damage-type",
  Protection = "protection",
  StackingBonus = "stacking-bonus",
}

export type ModifierSubType<TType> = 
  TType extends ModifierType.Bonus ? SubTypes.BonusModifierSubType : 
  TType extends ModifierType.Damage ? SubTypes.DamageModifierSubType : 
  TType extends ModifierType.Advantage ? SubTypes.AdvantageModifierSubType :
  TType extends ModifierType.Disadvantage ? undefined :
  TType extends ModifierType.Resistance ? undefined :
  TType extends ModifierType.Immunity ? undefined :
  TType extends ModifierType.Vulnerability ? undefined :
  TType extends ModifierType.Sense ? undefined :
  TType extends ModifierType.Set ? undefined :
  TType extends ModifierType.Language ? undefined :
  TType extends ModifierType.Proficiency ? undefined :
  TType extends ModifierType.HalfProficiency ? undefined :
  TType extends ModifierType.HalfProficiencyRoundUp ? undefined :
  TType extends ModifierType.TwiceProficiency ? undefined :
  TType extends ModifierType.Expertise ? undefined :
  TType extends ModifierType.Feat ? undefined :
  TType extends ModifierType.CarryingCapacity ? undefined :
  TType extends ModifierType.NaturalWeapon ? undefined :
  TType extends ModifierType.SpeedReduction ? undefined :
  TType extends ModifierType.MeleeWeaponAttack ? undefined :
  TType extends ModifierType.RangedWeaponAttack ? undefined :
  TType extends ModifierType.WeaponProperty ? undefined :
  TType extends ModifierType.FavoredEnemy ? undefined :
  TType extends ModifierType.Ignore ? undefined :
  TType extends ModifierType.EldritchBlast ? undefined :
  TType extends ModifierType.ReplaceDamageType ? undefined :
  TType extends ModifierType.Protection ? undefined :
  TType extends ModifierType.StackingBonus ? undefined :
  null

/* Test */
const testModifer: Modifier<ModifierType.Bonus> = {
  type: ModifierType.Bonus,
  subType: SubTypes.BonusModifierSubType.Stealth,
}
