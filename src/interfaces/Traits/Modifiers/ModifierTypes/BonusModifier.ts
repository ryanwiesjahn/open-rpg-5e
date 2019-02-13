import { ModifierTypes } from "../ModifierTypes"
import * as ModifierSubTypes from "../ModifierSubTypes"
import { Modifier } from "../Modifier"
import * as Types from "../../../Types"

interface BonusModifier<TSubType extends ModifierSubTypes.BonusModifierSubType> extends Modifier<ModifierTypes.Bonus> {
  subType: TSubType
}

// TODO: Fill out sub type interfaces

export interface AbilityScoreBonusModifier extends BonusModifier<Types.AbilityScoreTypes> {
  amount: number
}

export interface ChooseAbilityScoreBonusModifier extends BonusModifier<Types.SelectTypes.ChooseAbilityScore> {
  // TODO: What is this? Needs to be finished
  abilityScores: ModifierSubTypes.ChooseAbilityScores
}

export interface AbilityCheckBonusModifier extends BonusModifier<Types.AbilityCheckTypes> {
  // At least 1
  amount?: number
  proficiency?: Types.ProficiencyTypes
}

export interface AbilityAttackBonusModifier extends BonusModifier<Types.AbilityAttackTypes> {
  // TODO: Should this have amount? What should this be?
}

export interface SavingThrowBonusModifier extends BonusModifier<Types.SavingThrowTypes> {
  // At least 1
  amount?: number
  proficiency?: Types.ProficiencyTypes
}

export interface SkillBonusModifier extends BonusModifier<Types.SkillTypes | Types.OtherSkillTypes> {
  // At least 1
  amount?: number
  proficiency?: Types.ProficiencyTypes
}

export interface ArmorClassBonusModifier extends BonusModifier<Types.ArmorClassTypes> {
  amount: number
}

export interface HitPointBonusModifier extends BonusModifier<Types.HitPointTypes> {
  amount: number
}

export interface PassiveSkillBonusModifier extends BonusModifier<Types.PassiveSkillTypes> {
  amount: number
}

export interface SpeedBonusModifier extends BonusModifier<Types.SpeedTypes> {
  amount: number
}

export interface AttackBonusModifier extends BonusModifier<Types.AttackTypes> {
  // TODO: What should this be?
}

export interface WeaponAttackBonusModifier extends BonusModifier<Types.WeaponAttackTypes> {
  // TODO: What should this be?
}

export interface ProficiencyBonusModifier extends BonusModifier<Types.ProficiencyTypes | Types.OtherProficiencyTypes> {
  // TODO: What should this be?
}

export interface RangeBonusModifier extends BonusModifier<Types.RangeTypes> {
  // TODO: What should this be?
}

export interface DomainSpellBonusModifier extends BonusModifier<Types.MiscTypes.DomainSpell> {
  // TODO: What is this?
}

export interface MagicBonusModifier extends BonusModifier<Types.MiscTypes.Magic> {
  // TODO: What is this?
}

export interface SpellSaveDCBonusModifier extends BonusModifier<Types.MiscTypes.SpellSaveDC> {
  // TODO: What is this?
}

export interface AbilityScoreMaxBonusModifier extends BonusModifier<Types.MiscTypes.AbilityScoreMaximum> {
  amount: number
}

export interface ACMaxDexBonusModifier extends BonusModifier<Types.MiscTypes.ACMaxDexModifier> {
  amount: number
}

export interface ExtraAttacksBonusModifier extends BonusModifier<Types.MiscTypes.ExtraAttacks> {
  // TODO: What is this?
}

export interface ShieldACOnDexSavesBonusModifier extends BonusModifier<Types.MiscTypes.ShieldACOnDexSaves> {
  // TODO: What is this?
}

export interface UnarmedMovementBonusModifier extends BonusModifier<Types.MiscTypes.UnarmoredMovement> {
  amount: number
}

export interface MinimumBaseArmorBonusModifier extends BonusModifier<Types.MiscTypes.MinimumBaseArmor> {
  // TODO: What is this?
}

export interface ClericCantripBonusModifier extends BonusModifier<Types.MiscTypes.ClericCantripDamage> {
  // TODO: What is this?
}

export interface EldritchBlastDamageBonusModifier extends BonusModifier<Types.MiscTypes.EldritchBlastDamage> {
  // TODO: What is this?
}

/* Test */
const test: SkillBonusModifier = {
  type: ModifierTypes.Bonus,
  subType: Types.OtherSkillTypes.Initiative,
}
