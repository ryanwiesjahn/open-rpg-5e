import * as Types from "../Types"
import { Roll } from '../Measurements/Roll'

export interface WeaponProperty {
  type: Types.WeaponPropertyTypes
}

export interface AmmunitionWeaponProperty extends WeaponProperty {
  type: Types.WeaponPropertyTypes.Ammunition
}

export interface BurstFireWeaponProperty extends WeaponProperty {
  type: Types.WeaponPropertyTypes.BurstFire
  ammunition: 10 | number
}

export interface FinesseWeaponProperty extends WeaponProperty {
  type: Types.WeaponPropertyTypes.Finesse
}

export interface FirearmAmmunitionWeaponProperty extends WeaponProperty {
  type: Types.WeaponPropertyTypes.FirearmAmmunition
}

export interface HeavyWeaponProperty extends WeaponProperty {
  type: Types.WeaponPropertyTypes.Heavy
}

export interface LightWeaponProperty extends WeaponProperty {
  type: Types.WeaponPropertyTypes.Light
}

export interface LoadingWeaponProperty extends WeaponProperty {
  type: Types.WeaponPropertyTypes.Loading
}

export interface RangeWeaponProperty extends WeaponProperty {
  type: Types.WeaponPropertyTypes.Range
  normalRange: number
  longRange: number
}

export interface ReachWeaponProperty extends WeaponProperty {
  type: Types.WeaponPropertyTypes.Reach
}

export interface ReloadWeaponProperty extends WeaponProperty {
  type: Types.WeaponPropertyTypes.Reload
  shots: number
}

export interface SpecialWeaponProperty extends WeaponProperty {
  type: Types.WeaponPropertyTypes.Special
}

export interface ThrownWeaponProperty extends WeaponProperty {
  type: Types.WeaponPropertyTypes.Thrown
  normalRange: number
  longRange: number
}

export interface TwoHandedWeaponProperty extends WeaponProperty {
  type: Types.WeaponPropertyTypes.TwoHanded
}

export interface VersatileWeaponProperty extends WeaponProperty {
  type: Types.WeaponPropertyTypes.Versatile
  twoHanded: Roll
}
