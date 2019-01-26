import * as Types from "../../../interfaces/Types"
import { DataBundle } from "../../DataBundle"
import { ArmorEquipment } from '../../../interfaces/Equipment/ArmorEquipment';

const data: ArmorEquipment = {
  id: "abfd1311-8752-4acd-963b-38530310e47b",
  version: "1.0",
  name: "Ring Mail Armor",
  type: Types.ArmorEquipmentTypes.HeavyArmor,
  cost: {
    gp: 30,
  },
  weight: {
    amount: 40,
    unit: "lb",
  },
  tags: [
    Types.Tags.Warding,
  ],
  description: "This armor is leather armor with heavy rings sewn into it. The rings help reinforce the armor against blows from swords and axes. Ring mail is inferior to chain mail, and it's usually worn only by those who can't afford better armor.",
  armorClass: {
    amount: 14,
  },
  stealthDisadvantage: true,
}

export const ringMailArmorEquipment: DataBundle<ArmorEquipment> = {
  data,
  json: JSON.stringify(data),
}
