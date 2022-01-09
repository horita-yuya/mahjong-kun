import { Tile, TileMark } from "./tile";
import { And, Equal, IsContinuousNumber, Num, Or, Or4 } from "./utilType";
import { Hand } from "./hand";

export type IsHead<PAIR extends [Tile, Tile]> = Equal<PAIR[0], PAIR[1]>

export type IsSameMark<SET extends [Tile, Tile, Tile]> =
  SET extends [`${infer XMARK}${Num}`, `${infer YMARK}${Num}`, `${infer ZMARK}${Num}`] ?
    And<Equal<XMARK, YMARK>, Equal<XMARK, ZMARK>> extends true ? true : false : false

export type IsChow<SET extends [Tile, Tile, Tile]> = SET extends [`${TileMark}${infer X}`, `${TileMark}${infer Y}`, `${TileMark}${infer Z}`] ?
  And<IsContinuousNumber<X, Y, Z>, IsSameMark<SET>> : false;

export type IsKanchanWinning<HAND extends Hand, WINNING extends HAND[number]> = Or4<And<IsChow<[HAND[0], HAND[1], HAND[2]]>, Equal<WINNING, HAND[1]>>,
  And<IsChow<[HAND[3], HAND[4], HAND[5]]>, Equal<WINNING, HAND[4]>>,
  And<IsChow<[HAND[6], HAND[7], HAND[8]]>, Equal<WINNING, HAND[7]>>,
  And<IsChow<[HAND[9], HAND[10], HAND[11]]>, Equal<WINNING, HAND[10]>>>

// TODO
export type IsPencyanWinning<HAND extends Hand, WINNING extends HAND[number]> = Or4<And<IsChow<[HAND[0], HAND[1], HAND[2]]>, Or<Equal<WINNING, HAND[0]>, Equal<WINNING, HAND[2]>>>,
  And<IsChow<[HAND[3], HAND[4], HAND[5]]>, Or<Equal<WINNING, HAND[3]>, Equal<WINNING, HAND[5]>>>,
  And<IsChow<[HAND[6], HAND[7], HAND[8]]>, Or<Equal<WINNING, HAND[6]>, Equal<WINNING, HAND[8]>>>,
  And<IsChow<[HAND[9], HAND[10], HAND[11]]>, Or<Equal<WINNING, HAND[9]>, Equal<WINNING, HAND[11]>>>>

export type IsRyanmenWinning<HAND extends Hand, WINNING extends HAND[number]> = Or4<And<IsChow<[HAND[0], HAND[1], HAND[2]]>, Or<Equal<WINNING, HAND[0]>, Equal<WINNING, HAND[2]>>>,
  And<IsChow<[HAND[3], HAND[4], HAND[5]]>, Or<Equal<WINNING, HAND[3]>, Equal<WINNING, HAND[5]>>>,
  And<IsChow<[HAND[6], HAND[7], HAND[8]]>, Or<Equal<WINNING, HAND[6]>, Equal<WINNING, HAND[8]>>>,
  And<IsChow<[HAND[9], HAND[10], HAND[11]]>, Or<Equal<WINNING, HAND[9]>, Equal<WINNING, HAND[11]>>>>