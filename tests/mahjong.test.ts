import { MahjongKun } from "../index";
import { ExpectTrue } from "./testUtil";
import { Equal, Hand, HuAll } from "../types";

export type RonChildCase<HAND extends Hand, WINNING extends HAND[number], NAKI extends HAND[number][]> = MahjongKun<
  HAND,
  WINNING,
  NAKI,
  "ron",
  "child"
>;

// 1_1 タンヤオのみ・30, 40, 50符
type Case1_1_1 = ExpectTrue<
  Equal<
    RonChildCase<["o2", "o3", "o4", "I2", "I2", "I2", "C4", "C5", "C6", "I6", "I6", "I6", "o4", "o4"], "o3", ["C6"]>,
    "1000"
  >
>;

type Case1_1_2 = ExpectTrue<
  Equal<
    RonChildCase<["o2", "o3", "o4", "I2", "I2", "I2", "C4", "C5", "C6", "I6", "I6", "I6", "o4", "o4"], "o3", []>,
    "1300"
  >
>;

type Case1_1_3 = ExpectTrue<
  Equal<
    RonChildCase<["o2", "o3", "o4", "I2", "I2", "I2", "C4", "C4", "C4", "I6", "I6", "I6", "o4", "o4"], "o3", []>,
    "1600"
  >
>;

// 1_2 一盃口のみ
type Case1_2_1 = ExpectTrue<
  Equal<
    RonChildCase<["o2", "o3", "o4", "o2", "o3", "o4", "C9", "C9", "C9", "I5", "I6", "I7", "o4", "o4"], "o2", []>,
    "1300"
  >
>;

type Case1_2_2 = ExpectTrue<
  Equal<
    RonChildCase<["o2", "o3", "o4", "o2", "o3", "o4", "C7", "C8", "C9", "I5", "I6", "I7", "o4", "o4"], "o3", []>,
    "1300"
  >
>;

// リャンメンで平和が付く
type Case1_2_3 = ExpectTrue<
  Equal<
    RonChildCase<["o2", "o3", "o4", "o2", "o3", "o4", "C7", "C8", "C9", "I5", "I6", "I7", "o4", "o4"], "o2", []>,
    "2000"
  >
>;
