import { IsPinhu } from "../types/yaku";
import { ExpectFalse, ExpectTrue } from "../types/utilType";

type PinhuCase1 = ExpectTrue<IsPinhu<[
  "o1", "o2", "o3",
  "I1", "I2", "I3",
  "C4", "C5", "C6",
  "I6", "I7", "I8",
  "o4", "o4"
],
  "I8">>

type PinhuCase2 = ExpectFalse<IsPinhu<[
  "o1", "o2", "o3",
  "I1", "I2", "I3",
  "C4", "C5", "C6",
  "I6", "I7", "I8",
  "o4", "o4"
],
  "I7">>