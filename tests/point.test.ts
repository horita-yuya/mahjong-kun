import { Calculate, Equal } from "../types";
import { ExpectTrue } from "./testUtil";

type RonChildCase1_1 = ExpectTrue<
  Equal<Calculate<1, 30, "ron", "child", null>, "1000">
>;
type RonChildCase1_2 = ExpectTrue<
  Equal<Calculate<2, 30, "tumo", "child", null>, "500,1000">
>;
type RonChildCase1_3 = ExpectTrue<
  Equal<Calculate<2, 40, "tumo", "child", null>, "700,1300">
>;
// ピンヅモは20符として計算
type RonChildCase2_1 = ExpectTrue<
  Equal<Calculate<2, 20, "tumo", "child", "pin-tumo">, "400,700">
>;
type RonChildCase2_2 = ExpectTrue<
  Equal<Calculate<2, 30, "tumo", "child", "pin-tumo">, "400,700">
>;
type RonChildCase2_3 = ExpectTrue<
  Equal<Calculate<2, 40, "tumo", "child", "pin-tumo">, "400,700">
>;
// 七対子は25符として計算
type RonChildCase3_1 = ExpectTrue<
  Equal<Calculate<3, 30, "tumo", "child", "chitoitsu">, "800,1600">
>;
type RonChildCase3_2 = ExpectTrue<
  Equal<Calculate<3, 25, "tumo", "child", "chitoitsu">, "800,1600">
>;
// ピンヅモ以外で20符になった場合は30符で計算
type RonChildCase4_1 = ExpectTrue<
  Equal<Calculate<1, 20, "tumo", "child", null>, "300,500">
>;
type RonChildCase4_2 = ExpectTrue<
  Equal<Calculate<1, 20, "ron", "child", null>, "1000">
>;
