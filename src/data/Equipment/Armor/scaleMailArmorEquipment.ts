import * as Types from "../../../interfaces/Types"
import { DataBundle } from "../../DataBundle"
import { ArmorEquipment } from '../../../interfaces/Equipment/ArmorEquipment';

const data: ArmorEquipment = {
  id: "041570be-770a-4fc3-b8c5-1b015162f140",
  version: "1.0",
  name: "Scale Mail Armor",
  type: Types.ArmorEquipmentTypes.MediumArmor,
  cost: {
    gp: 50,
  },
  weight: {
    amount: 45,
    unit: "lb",
  },
  tags: [
    Types.Tags.Warding,
  ],
  description: "This armor consists of a coat and leggings (and perhaps a separate skirt) of leather covered with overlapping pieces of metal, much like the scales of a fish. The suit includes gauntlets.",
  armorClass: {
    amount: 14,
    modifier: Types.AbilityScoreTypes.Dexterity,
    maxModifier: 2,
  },
  stealthDisadvantage: true,
}

export const scaleMailArmorEquipment: DataBundle<ArmorEquipment> = {
  data,
  json: JSON.stringify(data),
}
