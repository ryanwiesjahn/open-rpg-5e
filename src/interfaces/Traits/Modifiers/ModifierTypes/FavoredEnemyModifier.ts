import { ModifierTypes } from "../ModifierTypes"
import * as ModifierSubTypes from "../ModifierSubTypes"
import { Modifier } from "../Modifier"

export interface FavoredEnemyModifier extends Modifier<ModifierTypes.FavoredEnemy> {
  subType: ModifierSubTypes.FavoredEnemyModifierSubType
}
