export type Number = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"

export type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false

export type And<X extends boolean, Y extends boolean> = X extends true ? Y extends true ? true : false : false

export type Next<NUM extends Number> = NUM extends "1" ? "2" :
  NUM extends "2" ? "3" :
    NUM extends "3" ? "4" :
      NUM extends "4" ? "5" :
        NUM extends "5" ? "6" :
          NUM extends "6" ? "7" :
            NUM extends "7" ? "8" :
              NUM extends "8" ? "9" : never
export type IsContinuousNumber<X extends Number, Y extends Number, Z extends Number> = And<Equal<Y, Next<X>>, Equal<Z, Next<Next<X>>>>

// For Test
export type ExpectTrue<T extends true> = T
export type ExpectFalse<T extends false> = T
