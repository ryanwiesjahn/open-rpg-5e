import * as Types from '../Types'
import * as Values from '../Values'
import * as General from '../General'

interface PrimaryAbilities {
  abilities: Types.AbilityScoreTypes[]
  selectType: Types.SelectTypes.All | Types.SelectTypes.Choose
}

interface EquipmentProficiencyFilter {
  equipmentType: EquipmentProficiencyTypes
  additionalInfo?: string
}

interface EquipmentProficiencies {
  equipmentTypes?: EquipmentProficiencyFilter[]
  equipmentIds?: UUID[]
}

type EquipmentProficiencyTypes
  = Types.ArmorEquipmentTypes
  | Types.WeaponEquipmentTypes

export interface Class extends General.Entry {
  name: string
  snippet: string
  description: string
  quickBuild?: string
  hitDie: Values.Dice
  primaryAbility: PrimaryAbilities
  savingThrowProficiencies: Types.AbilityScoreTypes[]
  equipmentProficiencies: EquipmentProficiencies
}
