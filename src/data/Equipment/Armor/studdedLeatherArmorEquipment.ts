import * as Types from "../../../interfaces/Modifiers/Types"
import { DataBundle } from "../../DataBundle"
import { ArmorEquipment } from '../../../interfaces/Equipment/ArmorEquipment';

const data: ArmorEquipment = {
  id: "UUID",
  version: "1.0",
  name: "Studded Leather Armor",
  type: Types.ArmorEquipmentTypes.LightArmor,
  cost: {
    gp: 45,
  },
  weight: {
    amount: 13,
    unit: "lb",
  },
  tags: [
    Types.Tags.Warding,
  ],
  description: "Made from tough but flexible leather, studded leather is reinforced with close-set rivets or spikes.",
  armorClass: {
    amount: 12,
    modifier: Types.AbilityScoreTypes.Dexterity,
  },
  stealthDisadvantage: false,
}

export const studdedLeatherArmorEquipment: DataBundle<ArmorEquipment> = {
  data,
  json: JSON.stringify(data),
}
