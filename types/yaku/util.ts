import { IsChowOrSet, IsPair } from "../tileSet";
import { AndAll } from "../utilType";
import { Chunk1, Chunk2, Chunk3, Chunk4, Hand, Pair } from "../hand";

export type IsWinningShape<HAND extends Hand> = AndAll<
  [
    IsChowOrSet<Chunk1<HAND>>,
    IsChowOrSet<Chunk2<HAND>>,
    IsChowOrSet<Chunk3<HAND>>,
    IsChowOrSet<Chunk4<HAND>>,
    IsPair<Pair<HAND>>,
  ]
>;
