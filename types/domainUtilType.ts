import { Tile, TileMark, TileSet } from "./tile";
import { And, And3, Equal, IsContinuousNumber, Not, Num, Or, Or3, Or4 } from "./utilType";

export type IsHead<PAIR extends [Tile, Tile]> = Equal<PAIR[0], PAIR[1]>

export type IsSameMark<SET extends [Tile, Tile, Tile]> =
  SET extends [`${infer XMARK}${Num}`, `${infer YMARK}${Num}`, `${infer ZMARK}${Num}`] ?
    And<Equal<XMARK, YMARK>, Equal<XMARK, ZMARK>> extends true ? true : false : false

export type IsChow<SET extends [Tile, Tile, Tile]> = SET extends [`${TileMark}${infer X}`, `${TileMark}${infer Y}`, `${TileMark}${infer Z}`] ?
  And<IsContinuousNumber<X, Y, Z>, IsSameMark<SET>> : false;
export type IsSet<SET extends [Tile, Tile, Tile]> = And<Equal<SET[0], SET[1]>, Equal<SET[0], SET[2]>>

export type IsChowOrSet<SET extends [Tile, Tile, Tile]> = Or<IsChow<SET>, IsSet<SET>>;

type IsOne<TILE extends Tile> = TILE extends `${TileMark}${infer X}` ? Equal<X, "1"> : false
type IsNine<TILE extends Tile> = TILE extends `${TileMark}${infer X}` ? Equal<X, "9"> : false

export type IsWind<TILE extends Tile> = Or4<Equal<TILE, "east">, Equal<TILE, "south">, Equal<TILE, "west">, Equal<TILE, "north">>
export type IsDragon<TILE extends Tile> = Or3<Equal<TILE, "white">, Equal<TILE, "green">, Equal<TILE, "red">>
export type IsHonour<TILE extends Tile> = Or<IsWind<TILE>, IsDragon<TILE>>

export type IsYaochu<TILE extends Tile> = Or3<IsOne<TILE>, IsNine<TILE>, IsHonour<TILE>>
export type IsChunChan<TILE extends Tile> = Not<IsYaochu<TILE>>

export type IsKanchan<SET extends TileSet, WINNING extends SET[number]> = And<IsChow<SET>, Equal<WINNING, SET[1]>>

export type IsPencyan<SET extends TileSet, WINNING extends SET[number]> = Or<
  // 1, 2, '3'
  And3<IsChow<SET>, IsOne<SET[0]>, Equal<WINNING, SET[2]>>,
  // '7', 8, 9
  And3<IsChow<SET>, IsNine<SET[2]>, Equal<WINNING, SET[0]>>
  >

export type IsRyanmen<SET extends TileSet, WINNING extends SET[number]> = And<
  Not<IsPencyan<SET, WINNING>>,
  And<IsChow<SET>, Or<Equal<WINNING, SET[0]>, Equal<WINNING, SET[2]>>>
  >