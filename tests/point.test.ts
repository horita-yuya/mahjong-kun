import { Calculate, Equal } from "../types";
import { ExpectTrue } from "./testUtil";

type RonChildCase1 = ExpectTrue<Equal<Calculate<1, 30, "ron", "child", null>, "1000">>;
// ピンヅモは20符として計算される
type RonChildCase2_1 = ExpectTrue<Equal<Calculate<2, 20, "tumo", "child", "pin-tumo">, "400,700">>;
type RonChildCase2_2 = ExpectTrue<Equal<Calculate<2, 30, "tumo", "child", "pin-tumo">, "400,700">>;
type RonChildCase2_3 = ExpectTrue<Equal<Calculate<2, 40, "tumo", "child", "pin-tumo">, "400,700">>;
// 七対子は25符として計算
type RonChildCase3_1 = ExpectTrue<Equal<Calculate<3, 30, "tumo", "child", "chitoitsu">, "800,1600">>;
type RonChildCase3_2 = ExpectTrue<Equal<Calculate<3, 25, "tumo", "child", "chitoitsu">, "800,1600">>;
