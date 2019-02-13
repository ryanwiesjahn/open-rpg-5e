import * as Types from "./../Types"
import * as Measurements from '../Measurements'
import { Equipment } from './Equipment'
import { WeaponProperty } from '../Stats/WeaponProperties'

export interface WeaponEquipment extends Equipment {
  type: Types.WeaponEquipmentTypes
  damage: Measurements.Damage
  properties: WeaponProperty[]
}
