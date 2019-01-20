import * as Types from "../../../interfaces/Modifiers/Types"
import { DataBundle } from "../../DataBundle"
import { ArmorEquipment } from '../../../interfaces/Equipment/ArmorEquipment';

const data: ArmorEquipment = {
  id: "UUID",
  version: "1.0",
  name: "Hide Armor",
  type: Types.ArmorEquipmentTypes.MediumArmor,
  cost: {
    gp: 10,
  },
  weight: {
    amount: 12,
    unit: "lb",
  },
  tags: [
    Types.Tags.Warding,
  ],
  description: "This crude armor consists of thick furs and pelts. It is commonly worn by barbarian tribes, evil humanoids, and other folk who lack access to the tools and materials needed to create better armor.",
  armorClass: {
    amount: 12,
    modifier: Types.AbilityScoreTypes.Dexterity,
    maxModifier: 2,
  },
  stealthDisadvantage: false,
}

export const hideArmorEquipment: DataBundle<ArmorEquipment> = {
  data,
  json: JSON.stringify(data),
}
