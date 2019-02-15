import * as Types from '../Types'

export interface BackgroundEquipmentGroup {
  description: string
  values: EquipmentGroupValue[]
}

export type EquipmentGroupValue
  = SpecificEquipmentGroupValue
  | SpecificEquipmentGroupValue
  | ChooseEquipmentGroupValue
  | GoldEquipmentGroupValue
  | CustomEquipmentGroupValue

interface _EquipmentGroupValue<TType extends Types.EquipmentGroupValueTypes> {
  equipmentGroupValueType: TType
}

interface SpecificEquipmentGroupValue extends _EquipmentGroupValue<Types.EquipmentGroupValueTypes.SpecificEquipment> {
  id: UUID
  amount: number
  requiresProficiency?: boolean
}

interface ChooseEquipmentGroupValue extends _EquipmentGroupValue<Types.EquipmentGroupValueTypes.ChooseEquipment> {
  amount: number
  equipmentType: Types.EquipmentTypes
}

interface GoldEquipmentGroupValue extends _EquipmentGroupValue<Types.EquipmentGroupValueTypes.Gold> {
  amount: number
}

interface CustomEquipmentGroupValue extends _EquipmentGroupValue<Types.EquipmentGroupValueTypes.CustomValue> {
  value: string
}
