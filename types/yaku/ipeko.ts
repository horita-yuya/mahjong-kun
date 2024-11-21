import { Chunk1, Chunk2, Chunk3, Chunk4, Hand } from "../hand";
import { AndAll, Equal, OrAll } from "../utilType";
import { IsChow } from "../tileSet";
import { IsWinningShape } from "./util";

export type YakuIpeko<
  HAND extends Hand,
  WINNING extends HAND[number],
  NAKI extends HAND[number][],
> = NAKI extends []
  ? IsWinningShape<HAND> extends true
    ? OrAll<
        [
          AndAll<[IsChow<Chunk1<HAND>>, Equal<Chunk1<HAND>, Chunk2<HAND>>]>,
          AndAll<[IsChow<Chunk1<HAND>>, Equal<Chunk1<HAND>, Chunk3<HAND>>]>,
          AndAll<[IsChow<Chunk1<HAND>>, Equal<Chunk1<HAND>, Chunk4<HAND>>]>,
          AndAll<[IsChow<Chunk2<HAND>>, Equal<Chunk2<HAND>, Chunk3<HAND>>]>,
          AndAll<[IsChow<Chunk2<HAND>>, Equal<Chunk2<HAND>, Chunk4<HAND>>]>,
        ]
      > extends true
      ? [1]
      : []
    : []
  : [];
