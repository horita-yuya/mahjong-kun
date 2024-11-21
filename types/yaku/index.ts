import { Hand } from "../hand";
import { ConcatAll } from "../utilType";
import { YakuPinhu } from "./pinhu";
import { YakuTanyao } from "./tanyao";
import { YakuToiToi } from "./toitoi";
import { YakuIpeko } from "./ipeko";
import { YakuChitoitsu } from "./chitoitsu";

export type YakuAll<
  HAND extends Hand,
  WINNING extends HAND[number],
  NAKI extends HAND[number][],
> = ConcatAll<
  [
    YakuPinhu<HAND, WINNING, NAKI>,
    YakuTanyao<HAND, WINNING>,
    YakuToiToi<HAND, WINNING>,
    YakuIpeko<HAND, WINNING, NAKI>,
  ]
>["length"];

export { YakuPinhu, YakuTanyao, YakuToiToi, YakuIpeko, YakuChitoitsu };
