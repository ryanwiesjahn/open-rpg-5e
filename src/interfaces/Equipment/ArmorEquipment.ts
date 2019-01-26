import * as Types from "./../Types"
import { Equipment } from './Equipment'
import { ArmorClass } from '../Measurements/ArmorClass'

export interface ArmorEquipment extends Equipment {
  type: Types.ArmorEquipmentTypes
  armorClass: ArmorClass
  strength?: number
  stealthDisadvantage?: boolean
}
