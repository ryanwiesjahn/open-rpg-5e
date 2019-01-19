import { Cost } from './../Measurements/Cost'
import * as Types from "./../Modifiers/Types"
import { Weight } from '../Measurements/Weight'

export interface Equipment {
  id: string
  version?: string
  name: string
  type: Types.EquipmentTypes
  cost: Cost
  weight: Weight
  tags: Array<Types.Tags | string>
  description: string
}
