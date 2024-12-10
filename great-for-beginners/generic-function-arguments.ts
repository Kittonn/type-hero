const identity = <T>(value: T) => value;

const mapArray = <T, U>(arr: Array<T>, fn: (value: T) => U) => arr.map(fn);
