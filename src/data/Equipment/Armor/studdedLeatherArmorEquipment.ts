import * as Types from "../../../interfaces/Types"
import { DataBundle } from "../../DataBundle"
import { ArmorEquipment } from '../../../interfaces/Equipment/ArmorEquipment';

const data: ArmorEquipment = {
  id: "8fdd4163-4b3a-47ad-84d1-7ffb0a58cb3d",
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
