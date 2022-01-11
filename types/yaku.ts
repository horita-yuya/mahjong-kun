import { Hand } from "./hand";
import { AndAll, Or4 } from "./utilType";
import { IsChow, IsChowOrSet, IsHead, IsSet } from "./tileSet";
import { IsRyanmen } from "./winning";
import { IsChunChan } from "./tile";

type Chunk1<HAND extends Hand> = [HAND[0], HAND[1], HAND[2]]
type Chunk2<HAND extends Hand> = [HAND[3], HAND[4], HAND[5]]
type Chunk3<HAND extends Hand> = [HAND[6], HAND[7], HAND[8]]
type Chunk4<HAND extends Hand> = [HAND[9], HAND[10], HAND[11]]
type Head<HAND extends Hand> = [HAND[12], HAND[13]]

type ZeroYaku = "zero"
export type Yaku = ZeroYaku | "richi" | "pinhu" | "menzenTumo" | "ippatu" | "tanyao" | "toitoi" | "sanshoku" | "ipeko";

export type IsWinningShape<HAND extends Hand> = AndAll<[
  IsChowOrSet<Chunk1<HAND>>,
  IsChowOrSet<Chunk2<HAND>>,
  IsChowOrSet<Chunk3<HAND>>,
  IsChowOrSet<Chunk4<HAND>>,
  IsHead<Head<HAND>>
]>

export type YakuAll<HAND extends Hand, WINNING extends HAND[number]> = [
  YakuPinhu<HAND, WINNING>,
  YakuTanyao<HAND, WINNING>,
  YakuToiToi<HAND, WINNING>
]

export type YakuPinhu<HAND extends Hand, WINNING extends HAND[number]> = AndAll<[
  IsChow<Chunk1<HAND>>,
  IsChow<Chunk2<HAND>>,
  IsChow<Chunk3<HAND>>,
  IsChow<Chunk4<HAND>>,
  IsHead<Head<HAND>>,
  Or4<IsRyanmen<Chunk1<HAND>, WINNING>,
    IsRyanmen<Chunk2<HAND>, WINNING>,
    IsRyanmen<Chunk3<HAND>, WINNING>,
    IsRyanmen<Chunk4<HAND>, WINNING>>
]> extends true ? "pinhu" : ZeroYaku;

export type YakuTanyao<HAND extends Hand, WINNING extends HAND[number]> = AndAll<[
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
  IsChunChan<HAND[13]>,
]> extends true ? "tanyao" : ZeroYaku;

export type YakuToiToi<HAND extends Hand, WINNING extends HAND[number]> = AndAll<[
  IsSet<Chunk1<HAND>>,
  IsSet<Chunk2<HAND>>,
  IsSet<Chunk3<HAND>>,
  IsSet<Chunk4<HAND>>,
  IsHead<Head<HAND>>
]> extends true ? "toitoi" : ZeroYaku;