
// SameMark
import { IsChow, IsClaimed, IsSameMark } from "../types";
import { ExpectFalse, ExpectTrue } from "./testUtil";

type Case1 = ExpectFalse<IsSameMark<["I1", "o2", "I3"]>>
type Case2 = ExpectFalse<IsSameMark<["o1", "I2", "I3"]>>
type Case3 = ExpectFalse<IsSameMark<["o1", "o2", "C3"]>>
type Case4 = ExpectFalse<IsSameMark<["C1", "o2", "o3"]>>
type Case5 = ExpectFalse<IsSameMark<["o1", "C2", "o3"]>>
type Case6 = ExpectTrue<IsSameMark<["o1", "o3", "o6"]>>
type Case7 = ExpectTrue<IsSameMark<["C2", "C4", "C8"]>>
type Case8 = ExpectTrue<IsSameMark<["I1", "I1", "I1"]>>

// IsChow
type IsChowCase1 = ExpectTrue<IsChow<["I1", "I2", "I3"]>>
type IsChowCase2 = ExpectTrue<IsChow<["o7", "o8", "o9"]>>
type IsChowCase3 = ExpectTrue<IsChow<["C4", "C5", "C6"]>>
type IsChowCase4 = ExpectFalse<IsChow<["I4", "C5", "C6"]>>
type IsChowCase5 = ExpectFalse<IsChow<["C4", "o5", "C6"]>>

// IsClaimed
type IsClaimedCase1 = ExpectTrue<IsClaimed<["I1", "I2", "I3"], ["I1"]>>
type IsClaimedCase2 = ExpectTrue<IsClaimed<["I1", "I2", "I3"], ["I2"]>>
type IsClaimedCase3 = ExpectTrue<IsClaimed<["I1", "I2", "I3"], ["I3"]>>
type IsClaimedCase4 = ExpectFalse<IsClaimed<["I1", "I2", "I3"], ["I4"]>>
