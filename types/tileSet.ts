import { Tile, TileMark } from "./tile";
import { And, Equal, IsContinuousNumber, Num, Or } from "./utilType";

export type IsHead<PAIR extends [Tile, Tile]> = Equal<PAIR[0], PAIR[1]>

export type IsSameMark<SET extends [Tile, Tile, Tile]> =
  SET extends [`${infer XMARK}${Num}`, `${infer YMARK}${Num}`, `${infer ZMARK}${Num}`] ?
    And<Equal<XMARK, YMARK>, Equal<XMARK, ZMARK>> extends true ? true : false : false

export type IsChow<SET extends [Tile, Tile, Tile]> = SET extends [`${TileMark}${infer X}`, `${TileMark}${infer Y}`, `${TileMark}${infer Z}`] ?
  And<IsContinuousNumber<X, Y, Z>, IsSameMark<SET>> : false;
export type IsSet<SET extends [Tile, Tile, Tile]> = And<Equal<SET[0], SET[1]>, Equal<SET[0], SET[2]>>

export type IsChowOrSet<SET extends [Tile, Tile, Tile]> = Or<IsChow<SET>, IsSet<SET>>;