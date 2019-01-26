import * as Types from "./../Types"
import { Roll } from "./../Measurements/Roll"

export interface Damage {
  roll?: Roll
  amount?: number
  damageType: Types.DamageTypes | Types.DamageTypes[]
}
