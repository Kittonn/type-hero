type TupleToUnion<T> = T extends (infer K)[] ? K : never;
