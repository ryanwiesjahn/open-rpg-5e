import { BonusModifierType } from "./Types/BonusModifierType";

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
  TType extends ModifierType.Bonus ? BonusModifierType : 
  TType extends ModifierType.Damage ? BonusModifierType : 
  TType extends ModifierType.Advantage ? BonusModifierType :
  TType extends ModifierType.Disadvantage ? BonusModifierType :
  TType extends ModifierType.Resistance ? BonusModifierType :
  TType extends ModifierType.Immunity ? BonusModifierType :
  TType extends ModifierType.Vulnerability ? BonusModifierType :
  TType extends ModifierType.Sense ? BonusModifierType :
  TType extends ModifierType.Set ? BonusModifierType :
  TType extends ModifierType.Language ? BonusModifierType :
  TType extends ModifierType.Proficiency ? BonusModifierType :
  TType extends ModifierType.HalfProficiency ? BonusModifierType :
  TType extends ModifierType.HalfProficiencyRoundUp ? BonusModifierType :
  TType extends ModifierType.TwiceProficiency ? BonusModifierType :
  TType extends ModifierType.Expertise ? BonusModifierType :
  TType extends ModifierType.Feat ? BonusModifierType :
  TType extends ModifierType.CarryingCapacity ? BonusModifierType :
  TType extends ModifierType.NaturalWeapon ? BonusModifierType :
  TType extends ModifierType.SpeedReduction ? BonusModifierType :
  TType extends ModifierType.MeleeWeaponAttack ? BonusModifierType :
  TType extends ModifierType.RangedWeaponAttack ? BonusModifierType :
  TType extends ModifierType.WeaponProperty ? BonusModifierType :
  TType extends ModifierType.FavoredEnemy ? BonusModifierType :
  TType extends ModifierType.Ignore ? BonusModifierType :
  TType extends ModifierType.EldritchBlast ? BonusModifierType :
  TType extends ModifierType.ReplaceDamageType ? BonusModifierType :
  TType extends ModifierType.Protection ? BonusModifierType :
  TType extends ModifierType.StackingBonus ? BonusModifierType :
  null

/* Test */
const testModifer: Modifier<ModifierType.Bonus> = {
  type: ModifierType.Bonus,
  subType: BonusModifierType.Stealth,
}
