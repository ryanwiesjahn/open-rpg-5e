
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


// Ability Score Types
// Strength Score,
// Charisma Score,
// Constitution Score,
// Dexterity Score,
// Wisdom Score,
// Intelligence Score,

// Speed
// Speed (Burrowing),
// Speed (Climbing),
// Speed (Flying),
// Speed (Swimming),
// Speed (Walking),

// Innate Speed
// Innate Speed (Burrowing),
// Innate Speed (Climbing),
// Innate Speed (Flying),
// Innate Speed (Swimming),
// Innate Speed (Walking),

// Armor Class (Partial)
// Armor Class,
// Unarmored Armor Class,

// Misc (Partial)
// AC Max Dex Modifier,
// Extra Attacks,
// Minimum Base Armor,
