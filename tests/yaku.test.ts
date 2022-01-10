import { YakuPinhu } from "../types/yaku";
import { Equal, ExpectFalse, ExpectTrue } from "../types/utilType";

type PinhuCase1 = ExpectTrue<Equal<YakuPinhu<[
  "o1", "o2", "o3",
  "I1", "I2", "I3",
  "C4", "C5", "C6",
  "I6", "I7", "I8",
  "o4", "o4"
], "I8">, "pinhu">>

type PinhuCase2 = ExpectFalse<YakuPinhu<[
  "o1", "o2", "o3",
  "I1", "I2", "I3",
  "C4", "C5", "C6",
  "I6", "I7", "I8",
  "o4", "o4"
],
  "I7">>

type PinhuCase3 = ExpectTrue<Equal<YakuPinhu<[
  "o1", "o2", "o3",
  "I1", "I2", "I3",
  "C4", "C5", "C6",
  "I6", "I7", "I8",
  "west", "west"
], "I8">, "pinhu">>

type Pinhu = YakuPinhu<[
  "o1", "o2", "o3",
  "I1", "I2", "I3",
  "C4", "C5", "C6",
  "I6", "I7", "I8",
  "west", "west"
], "I8">