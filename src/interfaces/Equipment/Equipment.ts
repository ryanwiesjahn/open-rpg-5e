import * as Types from "../Types"
import * as Values from '../Values'
import * as Measurements from '../Measurements'

export interface Equipment {
  id: UUID
  version?: string
  name: string
  type: Types.EquipmentTypes
  cost: Measurements.Cost
  weight: Measurements.Weight
  tags: Array<Values.Tags | string>
  description: string
}
