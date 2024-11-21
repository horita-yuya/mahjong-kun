import type { Hand } from "../hand";
import type { IsPair } from "../tileSet";
import type { AndAll, Equal, Not } from "../utilType";

export type YakuChitoitsu<
  HAND extends Hand,
  WINNING extends HAND[number],
> = AndAll<
  [
    AndAll<
      [
        Not<Equal<HAND[0], HAND[2]>>,
        Not<Equal<HAND[0], HAND[4]>>,
        Not<Equal<HAND[0], HAND[6]>>,
        Not<Equal<HAND[0], HAND[8]>>,
        Not<Equal<HAND[0], HAND[10]>>,
        Not<Equal<HAND[0], HAND[12]>>,
        Not<Equal<HAND[2], HAND[4]>>,
        Not<Equal<HAND[2], HAND[6]>>,
        Not<Equal<HAND[2], HAND[8]>>,
        Not<Equal<HAND[2], HAND[10]>>,
        Not<Equal<HAND[2], HAND[12]>>,
        Not<Equal<HAND[4], HAND[6]>>,
        Not<Equal<HAND[4], HAND[8]>>,
        Not<Equal<HAND[4], HAND[10]>>,
        Not<Equal<HAND[4], HAND[12]>>,
        Not<Equal<HAND[6], HAND[8]>>,
        Not<Equal<HAND[6], HAND[10]>>,
        Not<Equal<HAND[6], HAND[12]>>,
        Not<Equal<HAND[8], HAND[10]>>,
        Not<Equal<HAND[8], HAND[12]>>,
        Not<Equal<HAND[10], HAND[12]>>,
      ]
    >,
    IsPair<[HAND[0], HAND[1]]>,
    IsPair<[HAND[2], HAND[3]]>,
    IsPair<[HAND[4], HAND[5]]>,
    IsPair<[HAND[6], HAND[7]]>,
    IsPair<[HAND[8], HAND[9]]>,
    IsPair<[HAND[10], HAND[11]]>,
    IsPair<[HAND[12], HAND[13]]>,
  ]
> extends true
  ? [1, 1]
  : [];
