import { ModifierTypes } from "../ModifierTypes"
import * as ModifierSubTypes from "../ModifierSubTypes"
import { Modifier } from "../Modifier"

export interface CarryingCapacityModifier extends Modifier<ModifierTypes.CarryingCapacity> {
  type: ModifierTypes.CarryingCapacity
  subType: ModifierSubTypes.CarryingCapacityModifierSubType
}
