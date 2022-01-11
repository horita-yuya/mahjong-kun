import { Equal, ExpectTrue, HuValue } from "../types";

type Case1 = ExpectTrue<Equal<HuValue<["hu20"]>, 20>>
type Case2 = ExpectTrue<Equal<HuValue<["hu20", "hu10", "hu2"]>, 32>>
type Case3 = ExpectTrue<Equal<HuValue<["hu20", "hu10"]>, 30>>