type Even = 2 | 4 | 6 | 8;
type Number = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
type NextNumber = {
  "1": 20;
  "2": 30;
  "3": 40;
  "4": 50;
  "5": 60;
  "6": 70;
  "7": 80;
  "8": 90;
  "9": 100;
  "10": 110;
  "11": 120;
};

export type HuRoundedValue<T extends number> =
  `${T}` extends `${infer X}${Even}`
    ? X extends `${Number}`
      ? NextNumber[X]
      : never
    : T;
