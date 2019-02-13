import * as Types from "../../../interfaces/Types"
import * as Values from '../../../interfaces/Values'
import { DataBundle } from "../../DataBundle"
import { ArmorEquipment } from '../../../interfaces/Equipment/ArmorEquipment';

const data: ArmorEquipment = {
  id: "c29e9b29-4dde-4b1c-a329-5f16e2a2250a",
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
    Values.Tags.Warding,
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
