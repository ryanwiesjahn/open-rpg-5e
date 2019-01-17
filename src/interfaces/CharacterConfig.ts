export enum AdvancementType {
  Milestone = "milestone",
  XP = "xp",
}

export enum HitPointType {
  Fixed = "fixed",
  Manual = "manual",
}

export enum EncumberanceType {
  Normal = "normal",
  Variant = "variant",
  None = "none",
}

export interface UsePrerequisites {
  feats: boolean
  multiclassRequirements: boolean
}

export interface CharacterConfig {
  advancementType: AdvancementType
  hitPointType: HitPointType
  encumberanceType: EncumberanceType
  usePrerequisites: UsePrerequisites
  ignoreCoinWeight: boolean
}
