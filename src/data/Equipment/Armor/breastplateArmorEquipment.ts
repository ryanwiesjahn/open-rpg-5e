import * as Types from "../../../interfaces/Modifiers/Types"
import { DataBundle } from "../../DataBundle"
import { ArmorEquipment } from '../../../interfaces/Equipment/ArmorEquipment';

const data: ArmorEquipment = {
  id: "6a74845d-f2a9-46d6-b3e2-3dd0e4a6445c",
  version: "1.0",
  name: "Breastplate Armor",
  type: Types.ArmorEquipmentTypes.MediumArmor,
  cost: {
    gp: 400,
  },
  weight: {
    amount: 20,
    unit: "lb",
  },
  tags: [
    Types.Tags.Warding,
  ],
  description: "This armor consists of a fitted metal chest piece worn with supple leather. Although it leaves the legs and arms relatively unprotected, this armor provides good protection for the wearer's vital organs while leaving the wearer relatively unencumbered.",
  armorClass: {
    amount: 14,
    modifier: Types.AbilityScoreTypes.Dexterity,
    maxModifier: 2,
  },
  stealthDisadvantage: false,
}

export const breastplateArmorEquipment: DataBundle<ArmorEquipment> = {
  data,
  json: JSON.stringify(data),
}
