import * as ModifierSubTypes from "../ModifierSubTypes"
import { _Modifier } from "../Modifier"
import * as Types from "../../../Types"

interface _FeatModifier<TSubType extends ModifierSubTypes.FeatModifierSubType> extends _Modifier<Types.ModifierTypes.Feat> {
  subType: TSubType
}

// TODO: Make this work
interface ChooseFeatModifier extends _FeatModifier<Types.SelectTypes.Choose> {
  featId: UUID
  featChoiceIds: UUID[]
}

// TODO: Make this work
interface SpecificFeatModifier extends _FeatModifier<Types.SelectTypes.Specific> {
  featId: UUID
}

export type FeatModifier
  = ChooseFeatModifier
  | SpecificFeatModifier
