// TODO: Finish this... if even needed

interface ClassTableValue<TValue extends string | number> {
  actual: TValue
  display?: string
}

interface ClassTableColumn<TValue extends string | number> {
  heading: string
  1: ClassTableValue<TValue>
  2: ClassTableValue<TValue>
  3: ClassTableValue<TValue>
  4: ClassTableValue<TValue>
  5: ClassTableValue<TValue>
  6: ClassTableValue<TValue>
  7: ClassTableValue<TValue>
  8: ClassTableValue<TValue>
  9: ClassTableValue<TValue>
  10: ClassTableValue<TValue>
  11: ClassTableValue<TValue>
  12: ClassTableValue<TValue>
  13: ClassTableValue<TValue>
  14: ClassTableValue<TValue>
  15: ClassTableValue<TValue>
  16: ClassTableValue<TValue>
  17: ClassTableValue<TValue>
  18: ClassTableValue<TValue>
  19: ClassTableValue<TValue>
  20: ClassTableValue<TValue>
}

export interface ClassTable {
  proficiencyBonus: ClassTableColumn<number>
}
