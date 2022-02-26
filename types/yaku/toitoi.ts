import { Chunk1, Chunk2, Chunk3, Chunk4, Hand, Head } from "../hand";
import { AndAll } from "../utilType";
import { IsHead, IsSet } from "../tileSet";

export type YakuToiToi<HAND extends Hand, WINNING extends HAND[number]> = AndAll<
  [IsSet<Chunk1<HAND>>, IsSet<Chunk2<HAND>>, IsSet<Chunk3<HAND>>, IsSet<Chunk4<HAND>>, IsHead<Head<HAND>>]
> extends true
  ? [1, 1]
  : [];
