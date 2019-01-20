import * as Types from "../../../interfaces/Modifiers/Types"
import { DataBundle } from "../../DataBundle"
import { ArmorEquipment } from '../../../interfaces/Equipment/ArmorEquipment';

const data: ArmorEquipment = {
  id: "1184ad94-4012-4331-853a-cdb4fb97c7c7",
  version: "1.0",
  name: "Leather Armor",
  type: Types.ArmorEquipmentTypes.LightArmor,
  cost: {
    gp: 10,
  },
  weight: {
    amount: 10,
    unit: "lb",
  },
  tags: [
    Types.Tags.Warding,
  ],
  description: "The breastplate and shoulder protectors of this armor are made of leather that has been stiffened by being boiled in oil. The rest of the armor is made of softer and more flexible materials.",
  armorClass: {
    amount: 11,
    modifier: Types.AbilityScoreTypes.Dexterity,
  },
  stealthDisadvantage: false,
}

export const leatherArmorEquipment: DataBundle<ArmorEquipment> = {
  data,
  json: JSON.stringify(data),
}
