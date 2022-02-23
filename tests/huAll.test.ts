import { ExpectTrue } from "./testUtil";
import { Equal, HuAll } from "../types";

// 20 + 4 + 4
type Case1 = ExpectTrue<Equal<HuAll<["o2", "o3", "o4", "I2", "I2", "I2", "C4", "C5", "C6", "I6", "I6", "I6", "o4", "o4"], "o2">, 30>>
// 20
type Case2 = ExpectTrue<Equal<HuAll<["o2", "o3", "o4", "I2", "I3", "I4", "C4", "C5", "C6", "I2", "I3", "I4", "o4", "o4"], "o2">, 20>>