import { Cost } from './Measurements/Cost'
import * as Types from "./Modifiers/Types"

export interface Equipment {
  name: string
  type: Types.EquipmentTypes
  cost: Cost
  tags: Array<Types.Tags | string>
}
