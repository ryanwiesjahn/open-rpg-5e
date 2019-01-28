import { ModifierTypes } from "../ModifierTypes"
import * as ModifierSubTypes from "../ModifierSubTypes"
import { Modifier } from "../Modifier"
import * as Types from "../../Types"

interface FeatModifier<TSubType extends ModifierSubTypes.FeatModifierSubType> extends Modifier<ModifierTypes.Feat> {
  subType: TSubType
}

export interface ChooseFeatModifier extends FeatModifier<Types.SelectTypes.ChooseFeat> {
  featId: string
  featChoiceIds: string[]
}

export interface SpecificFeatModifier extends FeatModifier<Types.SelectTypes.SpecificFeat> {
  featId: string
}