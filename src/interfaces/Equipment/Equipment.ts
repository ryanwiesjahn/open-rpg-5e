import * as General from '../General'
import * as Types from "../Types"
import * as Values from '../Values'
import * as Measurements from '../Measurements'

export interface Equipment extends General.Entry {
  version?: string
  name: string
  type: Types.EquipmentTypes
  cost: Measurements.Currency
  weight: Measurements.Weight
  tags: Array<Values.Tags | string>
  description: string
}
