import { ModifierTypes } from "../ModifierTypes"
import * as ModifierSubTypes from "../ModifierSubTypes"
import { Modifier } from "../Modifier"
import * as Types from "../../Types"

interface ResistanceModifier<TSubType extends ModifierSubTypes.DamageModifierSubType> extends Modifier<ModifierTypes.Damage> {
  subType: TSubType
}

export interface AllResistanceModifier extends ResistanceModifier<Types.All> {}
export interface TypeResistanceModifier extends ResistanceModifier<Types.DamageTypes | Types.ExtraDamageTypes> {}
export interface AttackResistanceModifier extends ResistanceModifier<Types.AttackTypes> {}
export interface WeaponAttackResistanceModifier extends ResistanceModifier<Types.WeaponAttackTypes> {}
