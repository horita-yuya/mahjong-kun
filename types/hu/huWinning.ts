import { WinningStyle } from "../winning";
import { HuValue0, HuValue10, HuValue2 } from "../huValues";

export type HuWinning<STYLE extends WinningStyle, MENZEN extends boolean = false> = {
  ron: {
    true: HuValue10;
    false: HuValue0;
  };
  tumo: {
    true: HuValue2;
    false: HuValue2;
  };
}[STYLE][`${MENZEN}`];
