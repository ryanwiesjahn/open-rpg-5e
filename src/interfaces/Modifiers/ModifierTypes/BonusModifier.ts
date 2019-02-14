import * as ModifierSubTypes from "../ModifierSubTypes"
import { _Modifier } from "../Modifier"
import * as Types from "../../Types"

interface _BonusModifier<TSubType extends ModifierSubTypes.BonusModifierSubType> extends _Modifier<Types.ModifierTypes.Bonus> {
  subType: TSubType
}

// TODO: Fill out sub type interfaces

interface AbilityScoreBonusModifier extends _BonusModifier<Types.AbilityScoreTypes> {
  amount: number
}

interface ChooseAbilityScoreBonusModifier extends _BonusModifier<Types.SelectTypes.Choose> {
  // TODO: What is this? Needs to be finished
  abilityScores: ModifierSubTypes.ChooseAbilityScores
}

interface AbilityCheckBonusModifier extends _BonusModifier<Types.AbilityCheckTypes> {
  // At least 1
  amount?: number
  proficiency?: Types.ProficiencyTypes
}

interface AbilityAttackBonusModifier extends _BonusModifier<Types.AbilityAttackTypes> {
  // TODO: Should this have amount? What should this be?
}

interface SavingThrowBonusModifier extends _BonusModifier<Types.SavingThrowTypes> {
  // At least 1
  amount?: number
  proficiency?: Types.ProficiencyTypes
}

interface SkillBonusModifier extends _BonusModifier<Types.SkillTypes | Types.OtherSkillTypes> {
  // At least 1
  amount?: number
  proficiency?: Types.ProficiencyTypes
}

interface ArmorClassBonusModifier extends _BonusModifier<Types.ArmorClassTypes> {
  amount: number
}

interface HitPointBonusModifier extends _BonusModifier<Types.HitPointTypes> {
  amount: number
}

interface PassiveSkillBonusModifier extends _BonusModifier<Types.PassiveSkillTypes> {
  amount: number
}

interface SpeedBonusModifier extends _BonusModifier<Types.SpeedTypes> {
  amount: number
}

interface AttackBonusModifier extends _BonusModifier<Types.AttackTypes> {
  // TODO: What should this be?
}

interface WeaponAttackBonusModifier extends _BonusModifier<Types.WeaponAttackTypes> {
  // TODO: What should this be?
}

interface ProficiencyBonusModifier extends _BonusModifier<Types.ProficiencyTypes | Types.OtherProficiencyTypes> {
  // TODO: What should this be?
}

interface RangeBonusModifier extends _BonusModifier<Types.RangeTypes> {
  // TODO: What should this be?
}

interface DomainSpellBonusModifier extends _BonusModifier<Types.MiscTypes.DomainSpell> {
  // TODO: What is this?
}

interface MagicBonusModifier extends _BonusModifier<Types.MiscTypes.Magic> {
  // TODO: What is this?
}

interface SpellSaveDCBonusModifier extends _BonusModifier<Types.MiscTypes.SpellSaveDC> {
  // TODO: What is this?
}

interface AbilityScoreMaxBonusModifier extends _BonusModifier<Types.MiscTypes.AbilityScoreMaximum> {
  amount: number
}

interface ACMaxDexBonusModifier extends _BonusModifier<Types.MiscTypes.ACMaxDexModifier> {
  amount: number
}

interface ExtraAttacksBonusModifier extends _BonusModifier<Types.MiscTypes.ExtraAttacks> {
  // TODO: What is this?
}

interface ShieldACOnDexSavesBonusModifier extends _BonusModifier<Types.MiscTypes.ShieldACOnDexSaves> {
  // TODO: What is this?
}

interface UnarmedMovementBonusModifier extends _BonusModifier<Types.MiscTypes.UnarmoredMovement> {
  amount: number
}

interface MinimumBaseArmorBonusModifier extends _BonusModifier<Types.MiscTypes.MinimumBaseArmor> {
  // TODO: What is this?
}

interface ClericCantripBonusModifier extends _BonusModifier<Types.MiscTypes.ClericCantripDamage> {
  // TODO: What is this?
}

interface EldritchBlastDamageBonusModifier extends _BonusModifier<Types.MiscTypes.EldritchBlastDamage> {
  // TODO: What is this?
}

export type BonusModifier
  = AbilityScoreBonusModifier
  | ChooseAbilityScoreBonusModifier
  | AbilityCheckBonusModifier
  | AbilityAttackBonusModifier
  | SavingThrowBonusModifier
  | SkillBonusModifier
  | ArmorClassBonusModifier
  | HitPointBonusModifier
  | PassiveSkillBonusModifier
  | SpeedBonusModifier
  | AttackBonusModifier
  | WeaponAttackBonusModifier
  | ProficiencyBonusModifier
  | RangeBonusModifier
  | DomainSpellBonusModifier
  | MagicBonusModifier
  | SpellSaveDCBonusModifier
  | AbilityScoreMaxBonusModifier
  | ACMaxDexBonusModifier
  | ExtraAttacksBonusModifier
  | ShieldACOnDexSavesBonusModifier
  | UnarmedMovementBonusModifier
  | MinimumBaseArmorBonusModifier
  | ClericCantripBonusModifier
  | EldritchBlastDamageBonusModifier
