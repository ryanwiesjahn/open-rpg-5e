import * as Measurements from '../Measurements'

export interface CharacterInventory {
  equipmentIds: UUID[]
  activeEquipmentIds: UUID[]
  attunedMagicItems: {
    1: UUID,
    2: UUID,
    3: UUID,
  }
  currency: Measurements.Currency
  otherPossessions: string[]
}
