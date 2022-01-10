export type Num = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"

export type Not<X extends boolean> = X extends false ? true : false
export type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false
export type NotEqual<X, Y> = Not<Equal<X, Y>>

export type And<X extends boolean, Y extends boolean> = X extends true ? Y extends true ? true : false : false
export type And3<X extends boolean, Y extends boolean, Z extends boolean> = And<And<X, Y>, Z>
export type And4<X extends boolean, Y extends boolean, Z extends boolean, W extends boolean> = And3<And<X, Y>, Z, W>
export type And5<A extends boolean, B extends boolean, C extends boolean, D extends boolean, E extends boolean> = And4<And<A, B>, C, D, E>
export type And6<A extends boolean, B extends boolean, C extends boolean, D extends boolean, E extends boolean, F extends boolean> = And5<And<A, B>, C, D, E, F>

export type Or<X extends boolean, Y extends boolean> = X extends true ? true : Y extends true ? true : false
export type Or3<X extends boolean, Y extends boolean, Z extends boolean> = Or<X, Y> extends true ? true : Z extends true ? true : false
export type Or4<X extends boolean, Y extends boolean, Z extends boolean, W extends boolean> = Or3<X, Y, Z> extends true ? true : W extends true ? true : false

export type Concat<BASE extends number[], NUMS extends number[]> = [...BASE, ...NUMS]

export type Next<NUM extends string> = NUM extends "1" ? "2" :
  NUM extends "2" ? "3" :
    NUM extends "3" ? "4" :
      NUM extends "4" ? "5" :
        NUM extends "5" ? "6" :
          NUM extends "6" ? "7" :
            NUM extends "7" ? "8" :
              NUM extends "8" ? "9" : never
export type IsContinuousNumber<X extends string, Y extends string, Z extends string> = And<Equal<Y, Next<X>>, Equal<Z, Next<Next<X>>>>

// For Test
export type ExpectTrue<T extends true> = T
export type ExpectFalse<T extends false> = T
