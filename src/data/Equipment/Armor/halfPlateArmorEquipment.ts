import * as Types from "../../../interfaces/Modifiers/Types"
import { DataBundle } from "../../DataBundle"
import { ArmorEquipment } from '../../../interfaces/Equipment/ArmorEquipment';

const data: ArmorEquipment = {
  id: "12c55f38-83cf-43fc-a453-c2d109b70cc8",
  version: "1.0",
  name: "Half Plate Armor",
  type: Types.ArmorEquipmentTypes.MediumArmor,
  cost: {
    gp: 750,
  },
  weight: {
    amount: 40,
    unit: "lb",
  },
  tags: [
    Types.Tags.Warding,
  ],
  description: "Half plate consists of shaped metal plates that cover most of the wearer's body. It does not include leg protection beyond simple greaves that are attached with leather straps.",
  armorClass: {
    amount: 15,
    modifier: Types.AbilityScoreTypes.Dexterity,
    maxModifier: 2,
  },
  stealthDisadvantage: true,
}

export const halfPlateArmorEquipment: DataBundle<ArmorEquipment> = {
  data,
  json: JSON.stringify(data),
}
