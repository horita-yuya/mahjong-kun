// 基本符, 20
import { ConcatAll, Equal, Or5 } from "./utilType";
import { WinningStyle } from "./winning";
import { Chunk1, Chunk2, Chunk3, Chunk4, Hand } from "./hand";
import { IsSet } from "./tileSet";
import { IsYaochu, Tile, TileSet } from "./tile";

type Hu = "hu20" | "hu25" | "hu10" | "hu2" | "hu4" | "hu8" | "hu16" | "hu32" | "hu0";
type HuCalculate<ALL extends Hu[]> = ALL extends [infer X, ...(infer Y)] ? X extends Hu ? Y extends Hu[] ? ConcatAll<[HuValues[X], HuCalculate<Y>]> : [] : [] : []

type HuValues = {
  "hu0": [],
  "hu20": [
    1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1
  ],
  "hu25": [
    1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1,
    1
  ],
  "hu10": [
    1, 1, 1, 1, 1, 1, 1, 1,
    1, 1,
  ],
  "hu2": [
    1, 1,
  ],
  "hu4": [
    1, 1, 1, 1
  ],
  "hu8": [
    1, 1, 1, 1, 1, 1, 1, 1
  ],
  "hu16": [
    1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1
  ],
  "hu32": [
    1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1
  ],
}

type Even = 2 | 4 | 6 | 8;
type Number = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
type NextNumber = {
  "1": 20,
  "2": 30,
  "3": 40,
  "4": 50,
  "5": 60,
  "6": 70,
  "7": 80,
  "8": 90,
  "9": 100,
  "10": 110,
  "11": 120,
}

type Round<T extends number> = `${T}` extends `${infer X}${Even}` ? X extends `${Number}` ? NextNumber[X] : never : T;

export type HuValue<ALL extends Hu[]> = Round<HuCalculate<ALL>["length"]>
export type HuAll<HAND extends Hand, WINNING extends HAND[number], NAKI extends HAND[number][] = []> = HuValue<[HuBase, ...HuHand<HAND, WINNING, NAKI>]>

type HuBase = "hu20";
type HuWinning<STYLE extends WinningStyle, MENZEN extends boolean = false> = {
  ron: {
    "true": "hu10";
    "false": "hu0";
  },
  tumo: {
    "true": "hu2";
    "false": "hu2";
  }
}[STYLE][`${MENZEN}`]

type HuChunChanValue = {
  "shuntu": "hu0";
  "minko": "hu2";
  "anko": "hu4";
  "minkan": "hu8";
  "ankan": "hu16";
}

type HuYaoChuValue = {
  "shuntu": "hu0";
  "minko": "hu4";
  "anko": "hu8";
  "minkan": "hu16";
  "ankan": "hu32";
}

type HuHand<HAND extends Hand, WINNING extends HAND[number], NAKI extends HAND[number][]> = HuHandChunk<Chunk1<HAND>, Chunk2<HAND>, Chunk3<HAND>, Chunk4<HAND>, WINNING, NAKI>

type CheckSet<SET extends TileSet, NAKI extends Tile[]> = IsSet<SET> extends true ?
  Or5<Equal<SET[0], NAKI[0]>,
    Equal<SET[0], NAKI[1]>,
    Equal<SET[0], NAKI[2]>,
    Equal<SET[0], NAKI[3]>,
    Equal<SET[0], NAKI[4]>
    > extends true ?
    "minko" : "anko" : "shuntu"
type SetHuValue<SET extends TileSet, NAKI extends Tile[]> = IsYaochu<SET[0]> extends true ? HuYaoChuValue[CheckSet<SET, NAKI>] : HuChunChanValue[CheckSet<SET, NAKI>]
type HuHandChunk<C1 extends TileSet, C2 extends TileSet, C3 extends TileSet, C4 extends TileSet, WINNING extends Tile, NAKI extends Tile[]> = [
  SetHuValue<C1, [WINNING, ...NAKI]>,
  SetHuValue<C2, [WINNING, ...NAKI]>,
  SetHuValue<C3, [WINNING, ...NAKI]>,
  SetHuValue<C4, [WINNING, ...NAKI]>,
]