import * as Types from "../../Types"

export type ExpertiseModifierSubType
  = Types.AbilityCheckTypes
  | Types.SkillTypes
  | Types.OtherSkillTypes
  | Exclude<Types.SavingThrowTypes, Types.SavingThrowTypes.DeathSavingThrows>
  | Types.AttackTypes
  | Types.AbilityAttackTypes
  | Types.WeaponAttackTypes
  | "choose-equipment"   // TODO: Make this work
  | "specific-equipment"   // TODO: Make this work


// TODO: HANDLE THESE
// Alchemist's Supplies,
// Bagpipes,
// Battleaxe,
// Blowgun,
// Breastplate,
// Brewer's Supplies,
// Calligrapher's Supplies,
// Carpenter's Tools,
// Cartographer's Tools,
// Chain Mail,
// Chain Shirt,
// Choose a Gaming Set,
// Choose a Heavy Armor Type,
// Choose a Light Armor Type,
// Choose a Martial Weapon,
// Choose a Medium Armor Type,
// Choose a Musical Instrument,
// Choose a Simple Weapon,
// Choose a Skill,
// Choose a Tool,
// Choose a Weapon,
// Choose an Armor Type,
// Choose an Artisan's Tool,
// Choose Rogue Expertise,
// Club,
// Cobbler's Tools,
// Cook's Utensils,
// Crossbow, Hand,
// Crossbow, Heavy,
// Crossbow, Light,
// Dagger,
// Dart,
// Dice Set,
// Disguise Kit,
// Drum,
// Dulcimer,
// Flail,
// Flute,
// Forgery Kit,
// Glaive,
// Glassblower's Tools,
// Greataxe,
// Greatclub,
// Greatsword,
// Halberd,
// Half Plate,
// Handaxe,
// Heavy Armor,
// Herbalism Kit,
// Hide,
// Horn,
// Javelin,
// Jeweler's Tools,
// Lance,
// Leather,
// Leatherworker's Tools,
// Light Armor,
// Light Hammer,
// Longbow,
// Longsword,
// Lute,
// Lyre,
// Mace,
// Martial Weapons,
// Mason's Tools,
// Maul,
// Medium Armor,
// Mithril Plate Armor,
// Morningstar,
// Navigator's Tools,
// Net,
// Padded,
// Painter's Supplies,
// Pan Flute,
// Pike,
// Plate,
// Playing Card Set,
// Poisoner's Kit,
// Potter's Tools,
// Quarterstaff,
// Rapier,
// Ring Mail,
// Scale Mail,
// Scimitar,
// Shawm,
// Shortbow,
// Shortsword,
// Sickle,
// Simple Weapons,
// Sling,
// Smith's Tools,
// Spear,
// Splint,
// Steel Shield,
// Studded Leather,
// Thieves' Tools,
// Tinker's Tools,
// Trident,
// Viol,
// War pick,
// Warhammer,
// Weaver's Tools,
// Whip,
// Woodcarver's Tools
