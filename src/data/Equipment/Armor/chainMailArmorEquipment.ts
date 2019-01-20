import * as Types from "../../../interfaces/Modifiers/Types"
import { DataBundle } from "../../DataBundle"
import { ArmorEquipment } from '../../../interfaces/Equipment/ArmorEquipment';

const data: ArmorEquipment = {
  id: "UUID",
  version: "1.0",
  name: "Chain Mail Armor",
  type: Types.ArmorEquipmentTypes.HeavyArmor,
  cost: {
    gp: 75,
  },
  weight: {
    amount: 55,
    unit: "lb",
  },
  tags: [
    Types.Tags.Warding,
  ],
  description: "Made of interlocking metal rings, chain mail includes a layer of quilted fabric worn underneath the mail to prevent chafing and to cushion the impact of blows. The suit includes gauntlets.",
  armorClass: {
    amount: 16,
  },
  strength: 13,
  stealthDisadvantage: true,
}

export const chainMailArmorEquipment: DataBundle<ArmorEquipment> = {
  data,
  json: JSON.stringify(data),
}
