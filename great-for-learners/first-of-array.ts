type First<T extends unknown[]> = T extends [infer First, ...infer item]
  ? First
  : never;
