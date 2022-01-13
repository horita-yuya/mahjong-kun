// 基本符, 20
import { ConcatAll } from "./utilType";

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

export type HuValue<ALL extends Hu[]> = HuCalculate<ALL>["length"]