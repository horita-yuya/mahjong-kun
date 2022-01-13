import { Calculate, Equal } from "../types";
import { ExpectTrue } from "./testUtil";

type RonChildCase1 = ExpectTrue<Equal<Calculate<1, 30, "ron-child">, "1000">>
