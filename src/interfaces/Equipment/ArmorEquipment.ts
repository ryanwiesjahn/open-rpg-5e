import * as Types from "./../Types"
import { Equipment } from './Equipment'
import { ArmorClass } from '../Stats/ArmorClass'

export interface ArmorEquipment extends Equipment {
  type: Types.ArmorEquipmentTypes
  armorClass: ArmorClass
  strength?: number
  stealthDisadvantage?: boolean
}
