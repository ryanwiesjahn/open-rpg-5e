import { ModifierTypes } from "../ModifierTypes"
import * as ModifierSubTypes from "../ModifierSubTypes"
import { Modifier } from "../Modifier"
import * as Types from "../../Types"

interface CarryingCapacityModifier<TSubType extends ModifierSubTypes.CarryingCapacityModifierSubType> extends Modifier<ModifierTypes.CarryingCapacity> {
  subType: TSubType
}

export interface RacialSizeCarryingCapacityModifier extends CarryingCapacityModifier<Types.RacialSizeType> {}

export interface MultiplierCarryingCapacityModifier extends CarryingCapacityModifier<"multiplier"> {
  amount: number
}
