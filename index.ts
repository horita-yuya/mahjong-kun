import type {
  Calculate,
  Hand,
  HuAll,
  WinningStyle,
  YakuAll,
  YakuChitoitsu,
  YakuPinhu,
} from "./types";
import type { Position } from "./types/field";

export type MahjongKun<
  HAND extends Hand,
  WINNING extends HAND[number],
  NAKI extends HAND[number][],
  STYLE extends WinningStyle,
  POSITION extends Position,
> = Calculate<
  YakuAll<HAND, WINNING, NAKI>,
  HuAll<HAND, WINNING, NAKI, STYLE>,
  STYLE,
  POSITION,
  YakuChitoitsu<HAND, WINNING> extends [1, 1]
    ? "chitoitsu"
    : STYLE extends "tumo"
      ? YakuPinhu<HAND, WINNING, NAKI> extends [1]
        ? "pin-tumo"
        : null
      : null
>;
