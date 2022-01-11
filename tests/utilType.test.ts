import { AndAll, ConcatAll, Equal, ExpectFalse, ExpectTrue, IsContinuousNumber } from "../types";

type IsContinuousNumberCase1 = ExpectTrue<IsContinuousNumber<"1", "2", "3">>
type IsContinuousNumberCase2 = ExpectTrue<IsContinuousNumber<"2", "3", "4">>
type IsContinuousNumberCase3 = ExpectTrue<IsContinuousNumber<"3", "4", "5">>
type IsContinuousNumberCase4 = ExpectFalse<IsContinuousNumber<"1", "2", "4">>
type IsContinuousNumberCase5 = ExpectFalse<IsContinuousNumber<"1", "3", "2">>

type ConcatCase1 = ExpectTrue<Equal<ConcatAll<[[1], [2, 3], [4, 5, 6]]>, [1, 2, 3, 4, 5, 6]>>

type AndAllCase1 = ExpectTrue<AndAll<[true, true, true, true]>>
type AndAllCase2 = ExpectFalse<AndAll<[false, true, true, true]>>
type AndAllCase3 = ExpectFalse<AndAll<[true, false, true, true]>>
type AndAllCase4 = ExpectFalse<AndAll<[true, true, false, true]>>
type AndAllCase5 = ExpectFalse<AndAll<[true, true, false, false]>>
type AndAllCase6 = ExpectFalse<AndAll<[false, false, false, false]>>
