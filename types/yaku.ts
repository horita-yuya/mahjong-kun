import { Chunk1, Chunk2, Chunk3, Chunk4, Hand, Head } from "./hand";
import { AndAll, Equal, OrAll } from "./utilType";
import { IsChow, IsChowOrSet, IsHead, IsSet } from "./tileSet";
import { IsRyanmen } from "./winning";
import { IsChunChan } from "./tile";

type ZeroYaku = "zero";
export type Yaku = ZeroYaku | "richi" | "pinhu" | "menzenTumo" | "ippatu" | "tanyao" | "toitoi" | "sanshoku" | "ipeko";

export type IsWinningShape<HAND extends Hand> = AndAll<
  [
    IsChowOrSet<Chunk1<HAND>>,
    IsChowOrSet<Chunk2<HAND>>,
    IsChowOrSet<Chunk3<HAND>>,
    IsChowOrSet<Chunk4<HAND>>,
    IsHead<Head<HAND>>
  ]
>;

export type YakuAll<HAND extends Hand, WINNING extends HAND[number], NAKI extends HAND[number][]> = [
  YakuPinhu<HAND, WINNING, NAKI>,
  YakuTanyao<HAND, WINNING>,
  YakuToiToi<HAND, WINNING>
];

export type YakuPinhu<HAND extends Hand, WINNING extends HAND[number], NAKI extends HAND[number][]> = AndAll<
  [
    Equal<NAKI, []>,
    IsChow<Chunk1<HAND>>,
    IsChow<Chunk2<HAND>>,
    IsChow<Chunk3<HAND>>,
    IsChow<Chunk4<HAND>>,
    IsHead<Head<HAND>>,
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
  ? "pinhu"
  : ZeroYaku;

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
  ? "tanyao"
  : ZeroYaku;

export type YakuToiToi<HAND extends Hand, WINNING extends HAND[number]> = AndAll<
  [IsSet<Chunk1<HAND>>, IsSet<Chunk2<HAND>>, IsSet<Chunk3<HAND>>, IsSet<Chunk4<HAND>>, IsHead<Head<HAND>>]
> extends true
  ? "toitoi"
  : ZeroYaku;

export type YakuIpeko<HAND extends Hand, WINNING extends HAND[number], NAKI extends HAND[number][]> = NAKI extends []
  ? OrAll<
      [
        AndAll<[IsChow<Chunk1<HAND>>, Equal<Chunk1<HAND>, Chunk2<HAND>>]>,
        AndAll<[IsChow<Chunk1<HAND>>, Equal<Chunk1<HAND>, Chunk3<HAND>>]>,
        AndAll<[IsChow<Chunk1<HAND>>, Equal<Chunk1<HAND>, Chunk4<HAND>>]>,
        AndAll<[IsChow<Chunk2<HAND>>, Equal<Chunk2<HAND>, Chunk3<HAND>>]>,
        AndAll<[IsChow<Chunk2<HAND>>, Equal<Chunk2<HAND>, Chunk4<HAND>>]>
      ]
    > extends true
    ? "ipeko"
    : ZeroYaku
  : ZeroYaku;
