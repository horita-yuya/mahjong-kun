import { WinningStyle } from "../winning";
import { Position } from "../field";
import { PointRonChild } from "./pointRonChild";
import { PointTumoChild } from "./pointTumoChild";
import { AndAll, Equal } from "../utilType";

type HuValue = 20 | 25 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100 | 110;
type NoHan = 0;
type LowHan = 1 | 2 | 3 | 4;
type HighHan = 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;

type Hu<HU extends HuValue, STYLE extends WinningStyle, SPECIAL extends "pin-tumo" | "chitoitsu" | null> = AndAll<
  [Equal<STYLE, "tumo">, Equal<SPECIAL, "pin-tumo">]
> extends true
  ? "hu20"
  : SPECIAL extends "chitoitsu"
  ? "hu25"
  : HU extends 20
  ? "hu30"
  : `hu${HU}`;

export type Calculate<
  HAN extends NoHan | LowHan | HighHan | unknown,
  HU extends HuValue | unknown,
  STYLE extends WinningStyle,
  POSITION extends Position,
  SPECIAL extends "pin-tumo" | "chitoitsu" | null
> = HU extends HuValue
  ? HAN extends NoHan
    ? "NoPoint"
    : HAN extends LowHan
    ? Index[`${STYLE}-${POSITION}`][`han${HAN}`][Hu<HU, STYLE, SPECIAL>]
    : HAN extends HighHan
    ? Index[`${STYLE}-${POSITION}`][`han${HAN}`]
    : "InvalidInput"
  : "InvalidHu";

type Index = {
  "ron-child": PointRonChild;
  "tumo-child": PointTumoChild;
  // TODO:
  "ron-parent": PointRonChild;
  "tumo-parent": PointRonChild;
};
