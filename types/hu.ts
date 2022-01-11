// 基本符, 20
import { ConcatAll } from "./utilType";

export type HuBase = "hu20";

// メンゼンロン
export type HuMenzen = "hu10";

// 待ち符, 2
// ペンチャン、カンチャン、タンキ、ノベタン
export type HuWinning = "hu2";

type Hu = "hu20" | "hu25" | "hu10" | "hu2" | "hu4" | "hu8" | "hu16" | "hu32";
type HuCalculate<ALL extends Hu[]> = ALL extends [infer X, ...(infer Y)] ? X extends Hu ? Y extends Hu[] ? ConcatAll<[HuValues[X], HuCalculate<Y>]> : [] : [] : []

type HuValues = {
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

export type HuValue<ALL extends Hu[]> = HuCalculate<ALL>["length"]