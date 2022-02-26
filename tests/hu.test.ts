import { Equal, HuValue } from "../types";
import { ExpectTrue } from "./testUtil";
import {
  HuValue10,
  HuValue16,
  HuValue2,
  HuValue20,
  HuValue32,
  HuValue8,
} from "../types/huValues";

type Case1 = ExpectTrue<Equal<HuValue<[HuValue20]>, 20>>;
type Case2 = ExpectTrue<Equal<HuValue<[HuValue20, HuValue10, HuValue2]>, 40>>;
type Case3 = ExpectTrue<Equal<HuValue<[HuValue20, HuValue10]>, 30>>;
type Case4 = ExpectTrue<Equal<HuValue<[HuValue20, HuValue16]>, 40>>;
type Case5 = ExpectTrue<Equal<HuValue<[HuValue20, HuValue16, HuValue8]>, 50>>;
type Case6 = ExpectTrue<Equal<HuValue<[HuValue32, HuValue2]>, 40>>;
