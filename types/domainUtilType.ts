import { Tile, TileMark, TileSet } from "./tile";
import { And, And3, Equal, ExpectTrue, IsContinuousNumber, Not, Num, Or, Or4 } from "./utilType";
import { Hand } from "./hand";
import { Yaku } from "./yaku";

export type IsHead<PAIR extends [Tile, Tile]> = Equal<PAIR[0], PAIR[1]>

export type IsSameMark<SET extends [Tile, Tile, Tile]> =
  SET extends [`${infer XMARK}${Num}`, `${infer YMARK}${Num}`, `${infer ZMARK}${Num}`] ?
    And<Equal<XMARK, YMARK>, Equal<XMARK, ZMARK>> extends true ? true : false : false

export type IsChow<SET extends [Tile, Tile, Tile]> = SET extends [`${TileMark}${infer X}`, `${TileMark}${infer Y}`, `${TileMark}${infer Z}`] ?
  And<IsContinuousNumber<X, Y, Z>, IsSameMark<SET>> : false;

type IsOne<TILE extends Tile> = TILE extends `${TileMark}${infer X}` ? Equal<X, "1"> : false
type IsNine<TILE extends Tile> = TILE extends `${TileMark}${infer X}` ? Equal<X, "9"> : false

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