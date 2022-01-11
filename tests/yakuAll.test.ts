import { YakuAll } from "../types/yaku";
import { Equal, ExpectTrue } from "../types/utilType";
import { HanValue } from "../types/han";

type Case1 = YakuAll<["o2", "o3", "o4", "I6", "I7", "I8", "C4", "C5", "C6", "I6", "I7", "I8", "o4", "o4"], "o4">
type ExpectYaku1 = ExpectTrue<Equal<Case1, ["pinhu", "tanyao", "zero"]>>
type ExpectHanValue = ExpectTrue<Equal<HanValue<Case1>, 2>>