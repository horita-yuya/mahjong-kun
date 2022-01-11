import { Calculate, Equal, ExpectTrue } from "../types";

type RonChildCase1 = ExpectTrue<Equal<Calculate<1, 30, "ron-child">, "1000">>
