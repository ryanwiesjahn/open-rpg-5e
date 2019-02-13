import * as Types from "../../../interfaces/Types"
import * as Values from "../../../interfaces/Values"
import { DataBundle } from "../../DataBundle"
import { ArmorEquipment } from '../../../interfaces/Equipment/ArmorEquipment';

const data: ArmorEquipment = {
  id: "b4984e15-71df-45f4-b77e-b38cba3ba2bb",
  version: "1.0",
  name: "Padded Armor",
  type: Types.ArmorEquipmentTypes.LightArmor,
  cost: {
    gp: 5,
  },
  weight: {
    amount: 8,
    unit: "lb",
  },
  tags: [
    Values.Tags.Warding,
  ],
  description: "Padded armor consists of quilted layers of cloth and batting.",
  armorClass: {
    amount: 11,
    modifier: Types.AbilityScoreTypes.Dexterity,
  },
  stealthDisadvantage: true,
}

export const paddedArmorEquipment: DataBundle<ArmorEquipment> = {
  data,
  json: JSON.stringify(data),
}
