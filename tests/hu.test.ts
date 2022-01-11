import { HuBase, HuMenzen, HuValue, HuWinning } from "../types/hu";
import { Equal, ExpectTrue } from "../types/utilType";

type Case1 = ExpectTrue<Equal<HuValue<[HuBase]>, 20>>
type Case2 = ExpectTrue<Equal<HuValue<[HuBase, HuMenzen, HuWinning]>, 32>>
type Case3 = ExpectTrue<Equal<HuValue<[HuBase, HuMenzen]>, 30>>