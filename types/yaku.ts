import { Hand } from "./hand";
import { And6, Or4 } from "./utilType";
import { IsChow, IsHead, IsRyanmen } from "./domainUtilType";

type Chunk1<HAND extends Hand> = [HAND[0], HAND[1], HAND[2]]
type Chunk2<HAND extends Hand> = [HAND[3], HAND[4], HAND[5]]
type Chunk3<HAND extends Hand> = [HAND[6], HAND[7], HAND[8]]
type Chunk4<HAND extends Hand> = [HAND[9], HAND[10], HAND[11]]

export type IsPinhu<HAND extends Hand, WINNING extends HAND[number]> = And6<IsChow<Chunk1<HAND>>,
  IsChow<Chunk2<HAND>>,
  IsChow<Chunk3<HAND>>,
  IsChow<Chunk4<HAND>>,
  IsHead<[HAND[12], HAND[13]]>,
  Or4<IsRyanmen<Chunk1<HAND>, WINNING>,
    IsRyanmen<Chunk2<HAND>, WINNING>,
    IsRyanmen<Chunk3<HAND>, WINNING>,
    IsRyanmen<Chunk4<HAND>, WINNING>>>