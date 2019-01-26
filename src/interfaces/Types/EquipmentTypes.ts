
export enum ArmorEquipmentTypes {
  LightArmor = "light-armor",
  MediumArmor = "medium-armor",
  HeavyArmor = "heavy-armor",
  Shield = "shield",
}

export enum WeaponEquipmentTypes {
  SimpleRangedWeapon = "simple-ranged-weapon",
  FirearmsRangedWeapon = "firearms-ranged-weapon",
  SimpleMeleeWeapon = "simple-melee-weapon",
  MartialMeleeWeapon = "martial-melee-weapon",
}

export enum FocusEquipmentTypes {
  ArcaneFocus = "arcane-focus",
  DruidicFocus = "druidic-focus",
  HolySymbol = "holy-symbol",
}

export enum GearEquipmentTypes {
  AdventuringGear = "adventuring-gear",
  EquipmentPack = "equipment-pack",
}

export enum VehicleEquipmentTypes {
  LandVehicle = "land-vehicle",
  WaterVehicle = "water-vehicle",
}

export enum MiscEquipmentTypes {
  Ammunition = "ammunition",
  Poison = "poison",
  Potion = "potion",
  Tool = "tool",
  Mount = "mount",   // TODO: Should this be here?
}

export type EquipmentTypes
  = ArmorEquipmentTypes
  | WeaponEquipmentTypes
  | FocusEquipmentTypes
  | GearEquipmentTypes
  | VehicleEquipmentTypes
  | MiscEquipmentTypes
