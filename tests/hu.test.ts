import { Equal, HuValue } from "../types";
import { ExpectTrue } from "./testUtil";

type Case1 = ExpectTrue<Equal<HuValue<["hu20"]>, 20>>
type Case2 = ExpectTrue<Equal<HuValue<["hu20", "hu10", "hu2"]>, 40>>
type Case3 = ExpectTrue<Equal<HuValue<["hu20", "hu10"]>, 30>>
type Case4 = ExpectTrue<Equal<HuValue<["hu20", "hu16"]>, 40>>
type Case5 = ExpectTrue<Equal<HuValue<["hu20", "hu16", "hu8"]>, 50>>
type Case6 = ExpectTrue<Equal<HuValue<["hu32", "hu2"]>, 40>>
