import { IsChow, IsPencyanWinning, IsRyanmenWinning, IsSameMark } from "../types/domainUtilType";
import { ExpectFalse, ExpectTrue } from "../types/utilType";

// SameMark
type Case1 = ExpectFalse<IsSameMark<["I1", "o2", "I3"]>>
type Case2 = ExpectFalse<IsSameMark<["o1", "I2", "I3"]>>
type Case3 = ExpectFalse<IsSameMark<["o1", "o2", "C3"]>>
type Case4 = ExpectFalse<IsSameMark<["C1", "o2", "o3"]>>
type Case5 = ExpectFalse<IsSameMark<["o1", "C2", "o3"]>>
type Case6 = ExpectTrue<IsSameMark<["o1", "o3", "o6"]>>
type Case7 = ExpectTrue<IsSameMark<["C2", "C4", "C8"]>>
type Case8 = ExpectTrue<IsSameMark<["I1", "I1", "I1"]>>

// Ryanmen Check
type RyanmenCase1 = ExpectTrue<IsRyanmenWinning<["o1", "o2", "o3",], "o1">>
type RyanmenCase2 = ExpectTrue<IsRyanmenWinning<["o7", "o8", "o9",], "o9">>
type RyanmenCase3 = ExpectFalse<IsRyanmenWinning<["o1", "o2", "o3"], "o3">>
type RyanmenCase4 = ExpectFalse<IsRyanmenWinning<["o1", "o2", "o3"], "o2">>
type RyanmenCase5 = ExpectFalse<IsRyanmenWinning<["o7", "o8", "o9"], "o7">>

// Pencyan
type PencyanCase1 = ExpectTrue<IsPencyanWinning<["o1", "o2", "o3",], "o3">>
type PencyanCase2 = ExpectTrue<IsPencyanWinning<["o7", "o8", "o9",], "o7">>
type PencyanCase3 = ExpectFalse<IsPencyanWinning<["o2", "o3", "o4"], "o2">>
type PencyanCase4 = ExpectFalse<IsPencyanWinning<["o2", "o3", "o4"], "o3">>
type PencyanCase5 = ExpectFalse<IsPencyanWinning<["o2", "o3", "o4"], "o4">>

// IsChow
type IsChowCase1 = ExpectTrue<IsChow<["I1", "I2", "I3"]>>
type IsChowCase2 = ExpectTrue<IsChow<["o7", "o8", "o9"]>>
type IsChowCase3 = ExpectTrue<IsChow<["C4", "C5", "C6"]>>
type IsChowCase4 = ExpectFalse<IsChow<["I4", "C5", "C6"]>>
type IsChowCase5 = ExpectFalse<IsChow<["C4", "o5", "C6"]>>
