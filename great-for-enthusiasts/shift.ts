type Shift<T extends unknown[]> = T extends [infer First, ...infer Last]
  ? Last
  : [];
