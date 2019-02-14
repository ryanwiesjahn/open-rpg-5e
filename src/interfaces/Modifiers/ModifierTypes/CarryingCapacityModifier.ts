import * as ModifierSubTypes from "../ModifierSubTypes"
import { _Modifier } from "../Modifier"
import * as Types from "../../Types"

interface _CarryingCapacityModifier<TSubType extends ModifierSubTypes.CarryingCapacityModifierSubType> extends _Modifier<Types.ModifierTypes.CarryingCapacity> {
  subType: TSubType
}

interface RacialSizeCarryingCapacityModifier extends _CarryingCapacityModifier<Types.CreatureSizeTypes> {}

interface MultiplierCarryingCapacityModifier extends _CarryingCapacityModifier<"multiplier"> {
  amount: number
}

export type CarryingCapacityModifier
  = RacialSizeCarryingCapacityModifier
  | MultiplierCarryingCapacityModifier
