import * as Types from "../../../interfaces/Types"
import { DataBundle } from "../../DataBundle"
import { ArmorEquipment } from '../../../interfaces/Equipment/ArmorEquipment';

const data: ArmorEquipment = {
  id: "8659dbae-49d0-4850-8f7f-7390c73741b9",
  version: "1.0",
  name: "Chain Shirt Armor",
  type: Types.ArmorEquipmentTypes.MediumArmor,
  cost: {
    gp: 50,
  },
  weight: {
    amount: 22,
    unit: "lb",
  },
  tags: [
    Types.Tags.Warding,
  ],
  description: "Made of interlocking metal rings, a chain shirt is worn between layers of clothing or leather. This armor offers modest protection to the wearer's upper body and allows the sound of the rings rubbing against one another to be muffled by outer layers.",
  armorClass: {
    amount: 13,
    modifier: Types.AbilityScoreTypes.Dexterity,
    maxModifier: 2,
  },
  stealthDisadvantage: false,
}

export const chainShirtArmorEquipment: DataBundle<ArmorEquipment> = {
  data,
  json: JSON.stringify(data),
}
