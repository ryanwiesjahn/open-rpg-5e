
import * as Types from "../../Types"

export type SetModifierSubType
  = Types.AbilityScoreTypes
  | Types.SpeedTypes
  | Types.InnateSpeedType
  | Types.ArmorClassTypes.ArmorClass
  | Types.ArmorClassTypes.UnarmoredArmorClass
  | Types.MiscTypes.ACMaxDexModifier
  | Types.MiscTypes.ExtraAttacks
  | Types.MiscTypes.MinimumBaseArmor

/* Testing */
const test: SetModifierSubType = Types.ArmorClassTypes.UnarmoredArmorClass
