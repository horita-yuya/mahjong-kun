import { IsNine, IsOne, TileSet } from "./tile";
import { And, AndAll, Equal, Not, Or } from "./utilType";
import { IsChow } from "./tileSet";

export type WinningStyle = "ron" | "tumo";

export type IsKanchan<SET extends TileSet, WINNING extends SET[number]> = And<IsChow<SET>, Equal<WINNING, SET[1]>>;

export type IsPencyan<SET extends TileSet, WINNING extends SET[number]> = Or<
  // 1, 2, '3'
  AndAll<[IsChow<SET>, IsOne<SET[0]>, Equal<WINNING, SET[2]>]>,
  // '7', 8, 9
  AndAll<[IsChow<SET>, IsNine<SET[2]>, Equal<WINNING, SET[0]>]>
>;

export type IsRyanmen<SET extends TileSet, WINNING extends SET[number]> = And<
  Not<IsPencyan<SET, WINNING>>,
  And<IsChow<SET>, Or<Equal<WINNING, SET[0]>, Equal<WINNING, SET[2]>>>
>;
