import { MahjongKun } from "../index";
import { ExpectTrue } from "./testUtil";
import { Equal, } from "../types";

type Case1 = ExpectTrue<Equal<MahjongKun<["o2", "o3", "o4", "I2", "I2", "I2", "C4", "C5", "C6", "I6", "I6", "I6", "o4", "o4"], "o3", "ron">, "1300">>