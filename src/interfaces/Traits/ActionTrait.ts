import * as Types from '../Types'
import * as Values from '../Values'
import * as Measurements from '../Measurements'

export interface ActionTrait {
  actionType: Types.ActionTypes
  name?: string
  snippet?: string
  description?: string
  isAttack?: boolean
  isAffectedByMartialArts?: boolean   // TODO: Copied from DnDB. Refers to Monk class Martial Arts trait. Should this be here?
  abilityScoreType?: Types.AbilityScoreTypes
  level?: Values.Levels
  isProficient?: boolean
  attackRange?: Types.AttackRangeTypes
  saveType?: Types.AbilityScoreTypes
  fixedSaveDC?: number  // If saveType is set
  dice?: Measurements.Roll
  fixedValue?: number
  effectOnMiss?: string  // If attackRange is set
  effectOnSaveSuccess?: string  // If saveType is set
  effectOnSaveFail?: string  // If saveType is set
  weaponAttackSubType?: Types.WeaponAttackTypes.NaturalAttack | Types.WeaponAttackTypes.UnarmedAttack  // If actionType === weapon
  spellRangeType?: Types.SpellRangeTypes  // If actionType === spell
  damageType?: Types.DamageTypes
  range?: number  // If (actionType === general) || (actionType === spell && spellRangeType === ranged) || (actionType === weapon && attackRange === ranged)
  longRange?: number  // If actionType === weapon && attackRange === ranged
  areaOfEffectType?: Types.AreaOfEffectTypes
  areaOfEffectSize?: number  // If areaOfEffectType is set
  areaOfEffectSpecialFlag?: boolean  // If areaOfEffectType is set
  activationType?: Types.ActionActivationTypes
  activationTime?: number  // If activationType is time based
  resetType?: Types.ResetTypes
  numberOfUses?: number
}
