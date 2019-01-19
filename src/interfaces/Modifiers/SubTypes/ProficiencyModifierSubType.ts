import * as Types from "../Types"

export type ProficiencyModifierSubType
  = Types.AbilityChecks
  | Types.SkillTypes
  | Types.OtherSkillTypes
  | Exclude<Types.SavingThrowTypes, Types.SavingThrowTypes.DeathSavingThrows>
  | Types.AttackTypes
  | Types.AbilityAttackTypes
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
// Choose a Blood Hunter Skill,
// Choose a Centaur Skill,
// Choose a Dwarf Artisan's Tool,
// Choose a Gaming Set,
// Choose a Heavy Armor Type,
// Choose a Light Armor Type,
// Choose a Martial Weapon,
// Choose a Medium Armor Type,
// Choose a Minotaur Skill,
// Choose a Musical Instrument,
// Choose a Musical Instrument or Artisan's Tools,
// Choose a Musical Instrument or Gaming Set,
// Choose a One-Handed Melee Weapon,
// Choose a Order Domain Skill,
// Choose a Saving Throw,
// Choose a Simple Weapon,
// Choose a Skill,
// Choose a Skill or Tool,
// Choose a Tool,
// Choose a Weapon,
// Choose an Armor Type,
// Choose an Artisan's Tool,
// Choose an Intelligence, Wisdom, or Charisma Skill,
// Choose an Urban Bounty Hunter Tool,
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
// Double-Bladed Scimitar,
// Dragonchess Set,
// Drum,
// Dulcimer,
// Firearms,
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
// Improvised Weapons,
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
// Self,
// Shawm,
// Shields,
// Shortbow,
// Shortsword,
// Sickle,
// Simple Weapons,
// Sling,
// Smith's Tools,
// Spear,
// Splint,
// Stealth,
// Steel Shield,
// Studded Leather,
// Thieves' Tools,
// Three-Dragon Ante Set,
// Tinker's Tools,
// Trident,
// Vehicles (Land),
// Vehicles (Water),
// Viol,
// War pick,
// Warhammer,
// Weaver's Tools,
// Whip,
// Woodcarver's Tools,
