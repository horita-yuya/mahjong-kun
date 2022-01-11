import { Calculate } from "../types/point";
import { Equal, ExpectTrue } from "../types/utilType";

type RonChildCase1 = ExpectTrue<Equal<Calculate<1, 30, "ron-child">, "1000">>
