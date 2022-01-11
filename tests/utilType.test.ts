import { ConcatAll, Equal, ExpectFalse, ExpectTrue, IsContinuousNumber } from "../types/utilType";

type IsContinuousNumberCase1 = ExpectTrue<IsContinuousNumber<"1", "2", "3">>
type IsContinuousNumberCase2 = ExpectTrue<IsContinuousNumber<"2", "3", "4">>
type IsContinuousNumberCase3 = ExpectTrue<IsContinuousNumber<"3", "4", "5">>
type IsContinuousNumberCase4 = ExpectFalse<IsContinuousNumber<"1", "2", "4">>
type IsContinuousNumberCase5 = ExpectFalse<IsContinuousNumber<"1", "3", "2">>

type ConcatCase1 = ExpectTrue<Equal<ConcatAll<[[1], [2, 3], [4, 5, 6]]>, [1, 2, 3, 4, 5, 6]>>