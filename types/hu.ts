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