import * as Types from "./../Types"
import * as Measurements from "./../Measurements"

export interface Damage {
  roll?: Measurements.Roll
  amount?: number
  damageType: Types.DamageTypes | Types.DamageTypes[]
}
