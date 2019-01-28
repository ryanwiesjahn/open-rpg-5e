
export enum ModifierTypes {
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
  // SpeedReduction = "speed-reduction",   // Copied from DnDB. Will Set with subType Speed not work?
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
