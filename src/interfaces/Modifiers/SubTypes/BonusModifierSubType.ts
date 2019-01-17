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
  | "choose-ability-score"

export enum BonusModifierSubTypeOLD {
  // Ability Scores
  // StrengthAbilityChecks = "strength-ability-checks",
  // StrengthAttacks = "strength-attacks",
  // StrengthSavingThrows = "strength-saving-throws",
  // StrengthScore = "strength-score",
  // ConstitutionAbilityChecks = "constitution-ability-checks",
  // ConstitutionSavingThrows = "consitution-saving-throws",
  // ConstitutionScore = "constitution-score",
  // DexterityAbilityChecks = "dexterity-ability-checks",
  // DexterityAttacks = "dexterity-attacks",
  // DexteritySavingThrows = "dexterity-saving-throws",
  // DexterityScore = "dexterity-score",
  // IntelligenceAbilityChecks = "intelligence-ability-checks",
  // IntelligenceSavingThrows = "intelligence-saving-throws",
  // IntelligenceScore = "intelligence-score",
  // WisdomAbilityChecks = "wisdom-ability-checks",
  // WisdomSavingThrows = "wisdom-saving-throws",
  // WisdomScore = "wisdom-score",
  // CharismaAbilityChecks = "charisma-ability-checks",
  // CharismaSavingThrows = "charisma-saving-throws",
  // CharismaScore = "charisma-score",

  // Skills
  // Acrobatics = "acrobatics",
  // AnimalHandling = "animal-handling",
  // Arcana = "arcana",
  // Athletics = "athletics",
  // Deception = "deception",
  // History = "history",
  // Insight = "insight",
  // Intimidation = "intimidation",
  // Investigation = "investigation",
  // Medicine = "medicine",
  // Nature = "nature",
  // Perception = "perception",
  // Performance = "performance",
  // Persuasion = "persuasion",
  // Religion = "religion",
  // SleightOfHand = "sleight-of-hand",
  // Stealth = "stealth",
  // Survival = "survival",

  // Stats
  // AbilityScoreMaximum = "ability-score-maximum",
  // ArmorClass = "armor-class",
  // ArmoredArmorClass = "armored-armor-class",
  // DualWieldArmorClass = "dual-wield-armor-class",
  // HitPoints = "hit-points",
  // HitPointsPerLevel = "hit-points-per-level",
  // TemporaryHitPoints = "temporary-hit-points",
  // Initiative = "initiative",
  // PassiveInvestigation = "passive-investigation",
  // PassivePerception = "passive-perception",
  // PassiveInsight = "passive-insight",

  // Speed
  // Speed = "speed",
  // SpeedBurrowing = "speed-burrowing",
  // SpeedClimbing = "speed-climbing",
  // SpeedFlying = "speed-flying",
  // SpeedSwimming = "speed-swimming",
  // SpeedWalking = "speed-walking",

  // Attacks
  // MeleeAttacks = "melee-attacks",
  // MeleeSpellAttacks = "melee-spell-attacks",
  // MeleeWeaponAttacks = "melee-weapon-attacks",
  // RangedAttacks = "ranged-attacks",
  // RangedSpellAttacks = "ranged-spell-attacks",
  // RangedWeaponAttacks = "ranged-weapon-attacks",
  // NaturalAttacks = "natural-attacks",

  // Spells
  // SpellAttackRangeMultiplier = "spell-attack-range-multiplier",
  // SpellAttacks = "spell-attacks",
  // SpellSaveDC = "spell-save-dc",

  // Unarmed
  // UnarmedAttacks = "unarmed-attacks",
  // UnarmoredArmorClass = "unarmored-armor-class",
  // UnarmoredMovement = "unarmored-movement",

  // Proficiency
  // Proficiency = "proficiency",
  // HalfProficiency = "half-proficiency",
  // ProficiencyBonus = "proficiency-bonus",
  // TwiceProficiencyBonus = "twice-proficiency-bonus",

  // Choose Ability Scores   // TODO: Can all this be condensed?
  // ChooseAnAbilityScore = "choose-ability-score",
  // ChooseConstitutionOrIntelligence = "choose-constitution-or-intelligence",
  // ChooseConstitutionOrWisdom = "choose-constitution-or-wisdom",
  // ChooseDexterityOrCharisma = "choose-dexterity-or-charisma",
  // ChooseDexterityOrConstitution = "choose-dexterity-or-constitution",
  // ChooseDexterityOrIntelligence = "choose-dexterity-or-intelligence",
  // ChooseDexterityOrWisdom = "choose-dexterity-or-wisdom",
  // ChooseDexterityConstitutionOrCharisma = "choose-dexterity-constitution-or-charisma",
  // ChooseDexterityIntelligenceWisdomOrCharisma = "choose-dexterity-intelligence-wisdom-or-charisma",
  // ChooseIntelligenceOrCharisma = "choose-intelligence-or-charisma",
  // ChooseIntelligenceOrWisdom = "choose-intelligence-or-wisdom",
  // ChooseStrengthOrConstitution = "choose-strength-or-constitution",
  // ChooseStrengthOrDexterity = "choose-strength-or-dexterity",
  // ChooseStrengthOrWisdom = "choose-strength-or-wisdom",
  // ChooseStrengthConstitutionOrCharisma = "choose-strength-constitution-or-charisma",
  // ChooseStrengthConstitutionOrDexterity = "choose-strength-constitution-or-dexterity",
  // ChooseStrengthDexterityOrWisdom = "choose-strength-dexterity-or-wisdom",

  // Checks
  // AbilityChecks = "ability-checks",
  // SavingThrows = "saving-throws",

  // Other
  // MeleeReach = "melee-reach",
  // ExtraAttacks = "extra-attacks",
  // ACMaxDexModifier = "ac-max-dex-modifier",
  // ClericCantripDamage = "cleric-cantrip-damage",
  // EldritchBlastDamage = "eldritch-blast-damage",
  // DomainSpell = "domain-spell",
  // Magic = "magic",
  // ShieldACOnDexSaves = "shield-ac-on-dex-saves",
  // WeaponAttackRangeMultiplier = "weapon-attack-range-multiplier",
}

export type ChooseAbilityScores = Array<Types.AbilityScoreTypes>

/* Test */
const testChooseAbilityScores: ChooseAbilityScores = [Types.AbilityScoreTypes.Charisma]
