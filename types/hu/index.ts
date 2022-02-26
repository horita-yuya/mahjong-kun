import { ConcatAll } from "../utilType";
import { WinningStyle } from "../winning";
import { Hand } from "../hand";
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
} from "../huValues";
import { HuSet } from "./huHandSet";
import { HuWinning } from "./huWinning";
import { HuRoundedValue } from "./util";
import { HuMachi } from "./huMachi";

type Hu = HuValue20 | HuValue25 | HuValue10 | HuValue2 | HuValue4 | HuValue8 | HuValue16 | HuValue32 | HuValue0;
export type HuValue<ALL extends Hu[]> = HuRoundedValue<ConcatAll<ALL>["length"]>;

export type HuAll<
  HAND extends Hand,
  WINNING extends HAND[number],
  NAKI extends HAND[number][],
  STYLE extends WinningStyle
> = HuValue<
  [HuValue20, HuWinning<STYLE, NAKI extends [] ? true : false>, ...HuSet<HAND, WINNING, NAKI>, HuMachi<HAND, WINNING>]
>;
