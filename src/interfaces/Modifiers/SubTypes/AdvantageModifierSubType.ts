import * as Types from "../Types"

export type AdvantageModifierSubType
  = Types.AbilityChecks
  | Types.AbilityAttackTypes
  | Types.SavingThrowTypes
  | Types.SkillTypes
  | Types.OtherSkillTypes
  | Types.AttackTypes
  | Types.WeaponAttackTypes
  | Types.AttackRollTypes

export enum AdvantageModifierSubTypeOLD {
  // Ability Scores
  // StrengthAbilityChecks = "strength-ability-checks",
  // StrengthAttacks = "strength-attacks",
  // StrengthSavingThrows = "strength-saving-throws",
  // ConstitutionAbilityChecks = "constitution-ability-checks",
  // ConstitutionSavingThrows = "constitution-saving-throws",
  // DexterityAbilityChecks = "dexterity-ability-checks",
  // DexterityAttacks = "dexterity-attacks",
  // DexteritySavingThrows = "dexterity-saving-throws",
  // IntelligenceAbilityChecks = "intelligence-ability-checks",
  // IntelligenceSavingThrows = "intelligence-saving-throws",
  // WisdomAbilityChecks = "wisdom-ability-checks",
  // WisdomSavingThrows = "wisdom-saving-throws",
  // CharismaAbilityChecks = "charisma-ability-checks",
  // CharismaSavingThrows = "charisma-saving-throws",

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
  // Initiative = "initiative",

  // Checks
  // AbilityChecks = "ability-checks",
  // SavingThrows = "saving-throws",
  // DeathSavingThrows = "death-saving-throws",

  // Attacks
  // MeleeAttacks = "melee-attacks",
  // RangedAttacks = "ranged-attacks",
  // SpellAttacks = "spell-attacks",

  // Attack Rolls
  // AttackRollsByYou = "attack-rolls-by-you",
  // AttackRollsAgainstYou = "attack-rolls-against-you",
}
