import { Chunk1, Chunk2, Chunk3, Chunk4, Hand, Pair } from "../hand";
import { AndAll, Equal, OrAll } from "../utilType";
import { IsChow, IsPair } from "../tileSet";
import { IsRyanmen } from "../winning";

export type YakuPinhu<HAND extends Hand, WINNING extends HAND[number], NAKI extends HAND[number][]> = AndAll<
  [
    Equal<NAKI, []>,
    IsChow<Chunk1<HAND>>,
    IsChow<Chunk2<HAND>>,
    IsChow<Chunk3<HAND>>,
    IsChow<Chunk4<HAND>>,
    IsPair<Pair<HAND>>,
    OrAll<
      [
        IsRyanmen<Chunk1<HAND>, WINNING>,
        IsRyanmen<Chunk2<HAND>, WINNING>,
        IsRyanmen<Chunk3<HAND>, WINNING>,
        IsRyanmen<Chunk4<HAND>, WINNING>
      ]
    >
  ]
> extends true
  ? [1]
  : [];
