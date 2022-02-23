import {
  Calculate,
  Hand,
  HanValue, HuAll,
  HuValue, WinningStyle,
  YakuAll,
} from "./types";

export type MahjongKun<HAND extends Hand, WINNING extends HAND[number], STYLE extends WinningStyle, NAKI extends HAND[number][] = []> = Calculate<HanValue<YakuAll<HAND, WINNING>>, HuAll<HAND, WINNING, STYLE, NAKI>, "ron-child">