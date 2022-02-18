import {
  Calculate,
  Hand,
  HanValue,
  HuValue,
  YakuAll,
} from "./types";

export type MahjongKun<HAND extends Hand, WINNING extends HAND[number]> = Calculate<HanValue<YakuAll<HAND, WINNING>>, HuValue<["hu20", "hu2"]>, "ron-child">