import { HuValue0, HuValue2 } from "../huValues";
import { Chunk1, Chunk2, Chunk3, Chunk4, Hand } from "../hand";
import { OrAll } from "../utilType";
import { IsKanchan } from "../winning";

export type HuMachi<HAND extends Hand, WINNING extends HAND[number]> = OrAll<
  [
    IsKanchan<Chunk1<HAND>, WINNING>,
    IsKanchan<Chunk2<HAND>, WINNING>,
    IsKanchan<Chunk3<HAND>, WINNING>,
    IsKanchan<Chunk4<HAND>, WINNING>
  ]
> extends true
  ? HuValue2
  : HuValue0;
