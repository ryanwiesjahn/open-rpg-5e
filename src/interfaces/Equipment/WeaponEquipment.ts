import * as Types from "./../Types"
import { Equipment } from './Equipment'
import { Damage } from '../Measurements/Damage'
import { WeaponProperty } from '../Stats/WeaponProperties'

export interface WeaponEquipment extends Equipment {
  type: Types.WeaponEquipmentTypes
  damage: Damage
  properties: WeaponProperty[]
}
