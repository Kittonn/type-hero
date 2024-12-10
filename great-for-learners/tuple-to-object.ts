type TupleToObject<T extends readonly PropertyKey[]> = {
  [V in T[number]]: V;
};
