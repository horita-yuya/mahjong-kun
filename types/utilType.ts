export type Num = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

export type Not<X extends boolean> = X extends false ? true : false;
export type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false;

export type And<X extends boolean, Y extends boolean> = X extends true ? (Y extends true ? true : false) : false;
export type AndAll<ALL extends boolean[]> = ALL extends [infer X, ...infer Y]
  ? X extends boolean
    ? Y extends boolean[]
      ? And<X, AndAll<Y>>
      : false
    : false
  : true;

export type Or<X extends boolean, Y extends boolean> = X extends true ? true : Y extends true ? true : false;
export type OrAll<ALL extends boolean[]> = ALL extends [infer X, ...infer Y]
  ? X extends true
    ? true
    : Y extends boolean[]
    ? OrAll<Y>
    : false
  : false;

export type ConcatAll<ALL extends number[][]> = ALL extends [infer X, ...infer Y]
  ? X extends number[]
    ? Y extends number[][]
      ? [...X, ...ConcatAll<Y>]
      : []
    : []
  : [];

export type Next<NUM extends string> = NUM extends "1"
  ? "2"
  : NUM extends "2"
  ? "3"
  : NUM extends "3"
  ? "4"
  : NUM extends "4"
  ? "5"
  : NUM extends "5"
  ? "6"
  : NUM extends "6"
  ? "7"
  : NUM extends "7"
  ? "8"
  : NUM extends "8"
  ? "9"
  : never;
export type IsContinuousNumber<X extends string, Y extends string, Z extends string> = And<
  Equal<Y, Next<X>>,
  Equal<Z, Next<Next<X>>>
>;

export type Contains<LIST extends any[], ELEMENT> = LIST extends [infer X, ...infer Y]
  ? Or<Equal<ELEMENT, X>, Contains<Y, ELEMENT>>
  : false;
