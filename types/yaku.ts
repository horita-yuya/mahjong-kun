import { Hand } from "./hand";
import { And, And5 } from "./utilType";
import { IsChow, IsHead, IsRyanmenWinning } from "./domainUtilType";

export type IsPinhu<HAND extends Hand, WINNING extends HAND[number]> = And<IsRyanmenWinning<HAND, WINNING>,
  And5<IsChow<[HAND[0], HAND[1], HAND[2]]>,
    IsChow<[HAND[3], HAND[4], HAND[5]]>,
    IsChow<[HAND[6], HAND[7], HAND[8]]>,
    IsChow<[HAND[9], HAND[10], HAND[11]]>,
    IsHead<[HAND[12], HAND[13]]>>>