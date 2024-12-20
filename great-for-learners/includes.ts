type Equal<X, Y> = (<T>() => T extends X ? 1 : 0) extends <T>() => T extends Y
  ? 1
  : 0
  ? true
  : false;

type Includes<T extends readonly any[], U> = T extends [
  infer First,
  ...infer Rest
]
  ? Equal<First, U> extends true
    ? true
    : Includes<Rest, U>
  : false;
