
import * as Types from "../Types"

export type SetModifierSubType
  = Types.All
  | Types.AbilityScoreTypes
  | Types.SpeedTypes
  | Types.InnateSpeedType
  | Extract<Types.ArmorClassTypes, 
      Types.ArmorClassTypes.ArmorClass
      | Types.ArmorClassTypes.UnarmoredArmorClass
    >
  | Extract<Types.MiscTypes, 
      Types.MiscTypes.ACMaxDexModifier
      | Types.MiscTypes.ExtraAttacks
      | Types.MiscTypes.MinimumBaseArmor
    >

/* Testing */
const test: SetModifierSubType = Types.ArmorClassTypes.UnarmoredArmorClass
