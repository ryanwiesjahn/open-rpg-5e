import * as Values from '../Values'

export interface SpellFilter {
  spellLevels?: Values.SpellLevels[]
  spellClassIds?: UUID[]
}
