import { ConcatAll, Equal, Or5 } from "./utilType";
import { WinningStyle } from "./winning";
import { Chunk1, Chunk2, Chunk3, Chunk4, Hand } from "./hand";
import { IsSet } from "./tileSet";
import { IsYaochu, Tile, TileSet } from "./tile";
import {
  HuValue0,
  HuValue10,
  HuValue16,
  HuValue2,
  HuValue20,
  HuValue25,
  HuValue32,
  HuValue4,
  HuValue8,
} from "./huValues";

type Hu =
  | HuValue20
  | HuValue25
  | HuValue10
  | HuValue2
  | HuValue4
  | HuValue8
  | HuValue16
  | HuValue32
  | HuValue0;

export type HuValue<ALL extends Hu[]> = HuRoundedValue<
  ConcatAll<ALL>["length"]
>;
export type HuAll<
  HAND extends Hand,
  WINNING extends HAND[number],
  STYLE extends WinningStyle,
  NAKI extends HAND[number][] = []
> = HuValue<
  [
    HuBase,
    HuWinning<STYLE, NAKI extends [] ? true : false>,
    ...HuHand<HAND, WINNING, NAKI>
  ]
>;

type Even = 2 | 4 | 6 | 8;
type Number = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
type NextNumber = {
  "1": 20;
  "2": 30;
  "3": 40;
  "4": 50;
  "5": 60;
  "6": 70;
  "7": 80;
  "8": 90;
  "9": 100;
  "10": 110;
  "11": 120;
};

type HuRoundedValue<T extends number> = `${T}` extends `${infer X}${Even}`
  ? X extends `${Number}`
    ? NextNumber[X]
    : never
  : T;

type HuBase = HuValue20;
type HuWinning<STYLE extends WinningStyle, MENZEN extends boolean = false> = {
  ron: {
    true: HuValue10;
    false: HuValue0;
  };
  tumo: {
    true: HuValue2;
    false: HuValue2;
  };
}[STYLE][`${MENZEN}`];

type HuChunChanValue = {
  shuntu: HuValue0;
  minko: HuValue2;
  anko: HuValue4;
  minkan: HuValue8;
  ankan: HuValue16;
};

type HuYaoChuValue = {
  shuntu: HuValue0;
  minko: HuValue4;
  anko: HuValue8;
  minkan: HuValue16;
  ankan: HuValue32;
};

type HuHand<
  HAND extends Hand,
  WINNING extends HAND[number],
  NAKI extends HAND[number][]
> = HuHandChunk<
  Chunk1<HAND>,
  Chunk2<HAND>,
  Chunk3<HAND>,
  Chunk4<HAND>,
  WINNING,
  NAKI
>;

type CheckSetKind<
  SET extends TileSet,
  NAKI extends Tile[]
> = IsSet<SET> extends true
  ? Or5<
      Equal<SET[0], NAKI[0]>,
      Equal<SET[0], NAKI[1]>,
      Equal<SET[0], NAKI[2]>,
      Equal<SET[0], NAKI[3]>,
      Equal<SET[0], NAKI[4]>
    > extends true
    ? "minko"
    : "anko"
  : "shuntu";

type SetHuValue<SET extends TileSet, NAKI extends Tile[]> = IsYaochu<
  SET[0]
> extends true
  ? HuYaoChuValue[CheckSetKind<SET, NAKI>]
  : HuChunChanValue[CheckSetKind<SET, NAKI>];

type HuHandChunk<
  C1 extends TileSet,
  C2 extends TileSet,
  C3 extends TileSet,
  C4 extends TileSet,
  WINNING extends Tile,
  NAKI extends Tile[]
> = [
  SetHuValue<C1, [WINNING, ...NAKI]>,
  SetHuValue<C2, [WINNING, ...NAKI]>,
  SetHuValue<C3, [WINNING, ...NAKI]>,
  SetHuValue<C4, [WINNING, ...NAKI]>
];
