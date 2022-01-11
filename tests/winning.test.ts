import { ExpectFalse, ExpectTrue, IsPencyan, IsRyanmen } from "../types";

type RyanmenCase1 = ExpectTrue<IsRyanmen<["o1", "o2", "o3",], "o1">>
type RyanmenCase2 = ExpectTrue<IsRyanmen<["o7", "o8", "o9",], "o9">>
type RyanmenCase3 = ExpectFalse<IsRyanmen<["o1", "o2", "o3"], "o3">>
type RyanmenCase4 = ExpectFalse<IsRyanmen<["o1", "o2", "o3"], "o2">>
type RyanmenCase5 = ExpectFalse<IsRyanmen<["o7", "o8", "o9"], "o7">>

// Pencyan
type PencyanCase1 = ExpectTrue<IsPencyan<["o1", "o2", "o3",], "o3">>
type PencyanCase2 = ExpectTrue<IsPencyan<["o7", "o8", "o9",], "o7">>
type PencyanCase3 = ExpectFalse<IsPencyan<["o2", "o3", "o4"], "o2">>
type PencyanCase4 = ExpectFalse<IsPencyan<["o2", "o3", "o4"], "o3">>
type PencyanCase5 = ExpectFalse<IsPencyan<["o2", "o3", "o4"], "o4">>