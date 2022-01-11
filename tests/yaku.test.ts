import { YakuPinhu, YakuTanyao, YakuToiToi } from "../types/yaku";
import { Equal, ExpectFalse, ExpectTrue } from "../types/utilType";
import { Hand } from "../types/hand";

type IsPinhu<HAND extends Hand, WINNING extends HAND[number]> = Equal<YakuPinhu<HAND, WINNING>, "pinhu">
type PinhuCase1 = ExpectTrue<IsPinhu<["o1", "o2", "o3", "I1", "I2", "I3", "C4", "C5", "C6", "I6", "I7", "I8", "o4", "o4"], "I8">>
type PinhuCase2 = ExpectTrue<IsPinhu<["o1", "o2", "o3", "I1", "I2", "I3", "C4", "C5", "C6", "I6", "I7", "I8", "o4", "o4"], "o1">>
type PinhuCase3 = ExpectTrue<IsPinhu<["o2", "o3", "o4", "I1", "I2", "I3", "C4", "C5", "C6", "I6", "I7", "I8", "o4", "o4"], "o4">>
type PinhuCase4 = ExpectTrue<IsPinhu<["o1", "o2", "o3", "I1", "I2", "I3", "C4", "C5", "C6", "I6", "I7", "I8", "west", "west"], "I8">>
type PinhuCase5 = ExpectFalse<IsPinhu<["o1", "o2", "o3", "I1", "I2", "I3", "C4", "C5", "C6", "I6", "I7", "I8", "o4", "o4"], "I7">>
type PinhuCase6 = ExpectFalse<IsPinhu<["o1", "o2", "o3", "I1", "I2", "I3", "C4", "C5", "C6", "I6", "I7", "I8", "o4", "o4"], "o3">>
type PinhuCase7 = ExpectFalse<IsPinhu<["o1", "o2", "o3", "I1", "I2", "I3", "C4", "C5", "C6", "I6", "I7", "I8", "o4", "o4"], "o4">>

type IsTanyao<HAND extends Hand, WINNING extends HAND[number]> = Equal<YakuTanyao<HAND, WINNING>, "tanyao">
type TanyaoCase1 = ExpectTrue<IsTanyao<["o2", "o3", "o4", "I2", "I2", "I2", "C4", "C5", "C6", "I6", "I6", "I6", "o4", "o4"], "o3">>
type TanyaoCase2 = ExpectTrue<IsTanyao<["o2", "o2", "o2", "I8", "I8", "I8", "C4", "C5", "C6", "I6", "I7", "I8", "o4", "o4"], "o4">>
type TanyaoCase3 = ExpectTrue<IsTanyao<["o8", "o8", "o8", "I2", "I3", "I4", "C2", "C2", "C2", "I6", "I7", "I8", "C5", "C5"], "I8">>
type TanyaoCase4 = ExpectFalse<IsTanyao<["o8", "o9", "o8", "I2", "I3", "I4", "C2", "C2", "C2", "I6", "I7", "I8", "C5", "C5"], "I8">>
type TanyaoCase5 = ExpectFalse<IsTanyao<["o8", "o8", "o8", "I2", "I3", "I4", "C2", "C2", "C2", "I6", "I7", "I8", "east", "east"], "I8">>
type TanyaoCase6 = ExpectFalse<IsTanyao<["o8", "o8", "o8", "I1", "I2", "I3", "C2", "C2", "C2", "I6", "I7", "I8", "C5", "C5"], "I8">>

type IsToiToi<HAND extends Hand, WINNING extends HAND[number]> = Equal<YakuToiToi<HAND, WINNING>, "toitoi">
type ToiToiCase1 = ExpectTrue<IsToiToi<["o2", "o2", "o2", "I2", "I2", "I2", "C5", "C5", "C5", "I6", "I6", "I6", "o4", "o4"], "o4">>
type ToiToiCase2 = ExpectTrue<IsToiToi<["o2", "o2", "o2", "I2", "I2", "I2", "C5", "C5", "C5", "I6", "I6", "I6", "o4", "o4"], "I2">>
type ToiToiCase3 = ExpectFalse<IsToiToi<["o2", "o2", "o2", "I2", "I2", "I2", "C5", "C5", "C5", "I5", "I6", "I7", "o4", "o4"], "I2">>
