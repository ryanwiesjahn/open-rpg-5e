import * as Types from "../../../interfaces/Modifiers/Types"
import { DataBundle } from "../../DataBundle"
import { ArmorEquipment } from '../../../interfaces/Equipment/ArmorEquipment';

const data: ArmorEquipment = {
  id: "fe34ae35-b2fc-4cc9-84bf-4f0e266a6504",
  version: "1.0",
  name: "Plate Armor",
  type: Types.ArmorEquipmentTypes.HeavyArmor,
  cost: {
    gp: 1500,
  },
  weight: {
    amount: 65,
    unit: "lb",
  },
  tags: [
    Types.Tags.Warding,
  ],
  description: "Plate consists of shaped, interlocking metal plates to cover the entire body. A suit of plate includes gauntlets, heavy leather boots, a visored helmet, and thick layers of padding underneath the armor. Buckles and straps distribute the weight over the body.",
  armorClass: {
    amount: 18,
  },
  strength: 15,
  stealthDisadvantage: true,
}

export const plateArmorEquipment: DataBundle<ArmorEquipment> = {
  data,
  json: JSON.stringify(data),
}
