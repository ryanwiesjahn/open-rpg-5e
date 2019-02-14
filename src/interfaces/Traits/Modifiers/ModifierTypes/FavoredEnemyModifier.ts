import * as ModifierSubTypes from "../ModifierSubTypes"
import { _Modifier } from "../Modifier"
import * as Types from "../../../Types"

export interface FavoredEnemyModifier extends _Modifier<Types.ModifierTypes.FavoredEnemy> {
  subType: ModifierSubTypes.FavoredEnemyModifierSubType
}
