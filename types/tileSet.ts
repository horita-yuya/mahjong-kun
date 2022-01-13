import { Tile, TileClaimed, TileMark, TilePair, TileSet } from "./tile";
import { And, Contains, Equal, IsContinuousNumber, Num, Or, Or3 } from "./utilType";

export type IsHead<PAIR extends TilePair> = Equal<PAIR[0], PAIR[1]>

export type IsSameMark<SET extends TileSet> =
  SET extends [`${infer XMARK}${Num}`, `${infer YMARK}${Num}`, `${infer ZMARK}${Num}`] ?
    And<Equal<XMARK, YMARK>, Equal<XMARK, ZMARK>> extends true ? true : false : false

export type IsChow<SET extends TileSet> = SET extends [`${TileMark}${infer X}`, `${TileMark}${infer Y}`, `${TileMark}${infer Z}`] ?
  And<IsContinuousNumber<X, Y, Z>, IsSameMark<SET>> : false;
export type IsSet<SET extends TileSet> = And<Equal<SET[0], SET[1]>, Equal<SET[0], SET[2]>>

export type IsChowOrSet<SET extends TileSet> = Or<IsChow<SET>, IsSet<SET>>;

export type IsClaimed<SET extends TileSet, CLAIMED extends TileClaimed> = Or3<Contains<CLAIMED, SET[0]>, Contains<CLAIMED, SET[1]>, Contains<CLAIMED, SET[2]>>