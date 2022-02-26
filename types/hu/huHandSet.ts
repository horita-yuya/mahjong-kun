import { HuValue0, HuValue16, HuValue2, HuValue32, HuValue4, HuValue8 } from "../huValues";
import { Chunk1, Chunk2, Chunk3, Chunk4, Hand } from "../hand";
import { IsYaochu, Tile, TileSet } from "../tile";
import { IsSet } from "../tileSet";
import { Equal, OrAll } from "../utilType";

export type HuSet<HAND extends Hand, WINNING extends HAND[number], NAKI extends HAND[number][]> = HuHandSet<
  Chunk1<HAND>,
  Chunk2<HAND>,
  Chunk3<HAND>,
  Chunk4<HAND>,
  WINNING,
  NAKI
>;

type HuSetValues = {
  "chun-chan": {
    shuntu: HuValue0;
    minko: HuValue2;
    anko: HuValue4;
    minkan: HuValue8;
    ankan: HuValue16;
  };
  "yao-chu": {
    shuntu: HuValue0;
    minko: HuValue4;
    anko: HuValue8;
    minkan: HuValue16;
    ankan: HuValue32;
  };
};

type CheckSetKind<SET extends TileSet, NAKI extends Tile[]> = IsSet<SET> extends true
  ? OrAll<
      [
        Equal<SET[0], NAKI[0]>,
        Equal<SET[0], NAKI[1]>,
        Equal<SET[0], NAKI[2]>,
        Equal<SET[0], NAKI[3]>,
        Equal<SET[0], NAKI[4]>
      ]
    > extends true
    ? "minko"
    : "anko"
  : "shuntu";

type SetHuValue<SET extends TileSet, NAKI extends Tile[]> = IsYaochu<SET[0]> extends true
  ? HuSetValues["yao-chu"][CheckSetKind<SET, NAKI>]
  : HuSetValues["chun-chan"][CheckSetKind<SET, NAKI>];

type HuHandSet<
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
