import * as Types from "../../Types"

export type IgnoreModifierBonusTypes = Types.BonusTypes.UnarmoredDexACBonus | Types.BonusTypes.UnarmoredDexNaturalACBonus

export type IgnoreModifierSubType
  = Types.RestrictionTypes
  | IgnoreModifierBonusTypes
