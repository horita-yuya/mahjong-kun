import type {Hand} from "./hand";
import type {WinningStyle} from "./winning";
import type {Position} from "./field";
import type {Calculate} from "./point";
import type {YakuAll, YakuChitoitsu, YakuPinhu} from "./yaku";
import type {HuAll} from "./hu";

export * from "./hand";
export * from "./hu";
export * from "./point";
export * from "./tile";
export * from "./tileSet";
export * from "./utilType";
export * from "./winning";
export * from "./yaku";

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
