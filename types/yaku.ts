import { Hand } from "./hand";
import { And, And5, Equal, Not, Or4 } from "./utilType";
import { IsChow, IsHead } from "./domainUtilType";

export type IsKanchanWinning<HAND extends Hand, WINNING extends HAND[number]> = Or4<And<IsChow<[HAND[0], HAND[1], HAND[2]]>, Equal<WINNING, HAND[1]>>,
  And<IsChow<[HAND[3], HAND[4], HAND[5]]>, Equal<WINNING, HAND[4]>>,
  And<IsChow<[HAND[6], HAND[7], HAND[8]]>, Equal<WINNING, HAND[7]>>,
  And<IsChow<[HAND[9], HAND[10], HAND[11]]>, Equal<WINNING, HAND[10]>>>

export type IsPinhu<HAND extends Hand, WINNING extends HAND[number]> = And<Not<IsKanchanWinning<HAND, WINNING>>,
  And5<IsChow<[HAND[0], HAND[1], HAND[2]]>,
    IsChow<[HAND[3], HAND[4], HAND[5]]>,
    IsChow<[HAND[6], HAND[7], HAND[8]]>,
    IsChow<[HAND[9], HAND[10], HAND[11]]>,
    IsHead<[HAND[12], HAND[13]]>>>