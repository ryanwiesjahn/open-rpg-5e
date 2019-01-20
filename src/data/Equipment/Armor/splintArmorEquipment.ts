import * as Types from "../../../interfaces/Modifiers/Types"
import { DataBundle } from "../../DataBundle"
import { ArmorEquipment } from '../../../interfaces/Equipment/ArmorEquipment';

const data: ArmorEquipment = {
  id: "UUID",
  version: "1.0",
  name: "Splint Armor",
  type: Types.ArmorEquipmentTypes.HeavyArmor,
  cost: {
    gp: 200,
  },
  weight: {
    amount: 60,
    unit: "lb",
  },
  tags: [
    Types.Tags.Warding,
  ],
  description: "This armor is made of narrow vertical strips of metal riveted to a backing of leather that is worn over cloth padding. Flexible chain mail protects the joints.",
  armorClass: {
    amount: 17,
  },
  strength: 15,
  stealthDisadvantage: true,
}

export const splintArmorEquipment: DataBundle<ArmorEquipment> = {
  data,
  json: JSON.stringify(data),
}
