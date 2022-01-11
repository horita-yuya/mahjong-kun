import { ConcatAll } from "./utilType";
import { Yaku } from "./yaku";

type Han = {
  richi: [1],
  pinhu: [1],
  menzenTumo: [1],
  ippatu: [1],
  tanyao: [1],
  toitoi: [1, 1],
  sanshoku: [1, 1],
  ipeko: [1],
}

type NakiHan = {
  richi: [],
  pinhu: [],
  menzenTumo: [],
  ippatu: [],
  tanyao: [1],
  toitoi: [1, 1],
  sanshoku: [1],
  ipeko: [],
}

type HanCalculate<ALL extends Yaku[]> = ALL extends [infer X, ...(infer Y)] ? X extends Yaku ? Y extends Yaku[] ? ConcatAll<[Han[X], HanCalculate<Y>]> : [] : [] : []
type NakiHanCalculate<ALL extends Yaku[]> = ALL extends [infer X, ...(infer Y)] ? X extends Yaku ? Y extends Yaku[] ? ConcatAll<[NakiHan[X], NakiHanCalculate<Y>]> : [] : [] : []

export type HanValue<ALL extends Yaku[]> = HanCalculate<ALL>["length"]
export type NakiHanValue<ALL extends Yaku[]> = NakiHanCalculate<ALL>["length"]
