import { Hand } from "../hand";
import { AndAll } from "../utilType";
import { IsChunChan } from "../tile";
import { IsWinningShape } from "./util";

export type YakuTanyao<HAND extends Hand, WINNING extends HAND[number]> = AndAll<
  [
    IsWinningShape<HAND>,
    IsChunChan<HAND[0]>,
    IsChunChan<HAND[1]>,
    IsChunChan<HAND[2]>,
    IsChunChan<HAND[3]>,
    IsChunChan<HAND[4]>,
    IsChunChan<HAND[5]>,
    IsChunChan<HAND[6]>,
    IsChunChan<HAND[7]>,
    IsChunChan<HAND[8]>,
    IsChunChan<HAND[9]>,
    IsChunChan<HAND[10]>,
    IsChunChan<HAND[11]>,
    IsChunChan<HAND[12]>,
    IsChunChan<HAND[13]>
  ]
> extends true
  ? [1]
  : [];
