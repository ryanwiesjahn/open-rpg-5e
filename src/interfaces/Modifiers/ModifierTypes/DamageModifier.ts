import { ModifierTypes } from "../ModifierTypes"
import * as ModifierSubTypes from "../ModifierSubTypes"
import { Modifier } from "../Modifier"
import * as Types from "../../Types"
import { Roll } from '../../Measurements/Roll';

interface DamageModifier<TSubType extends ModifierSubTypes.DamageModifierSubType> extends Modifier<ModifierTypes.Damage> {
  subType: TSubType
}

export interface AllDamageModifier extends DamageModifier<Types.All> {
  // TODO: Is this right?
  // At least 1
  amount?: number
  roll?: Roll
}

export interface TypeDamageModifier extends DamageModifier<Types.DamageTypes | Types.ExtraDamageTypes> {
  // TODO: Is this right?
  amount?: number
  roll?: Roll
}

export interface AttackDamageModifier extends DamageModifier<Types.AttackTypes> {
  // TODO: Is this right?
  // At least 1
  amount?: number
  roll?: Roll
}

export interface WeaponAttackDamageModifier extends DamageModifier<Types.WeaponAttackTypes> {
  // TODO: Is this right?
  // At least 1
  amount?: number
  roll?: Roll
}
