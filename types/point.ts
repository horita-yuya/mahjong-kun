type HuValue = 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100 | 110;
type Situation = "ron-child";// | "ron-parent" | "tumo-child" | "tumo-parent";
type NoHan = 0;
type LowHan = 1 | 2 | 3 | 4;
type HighHan = 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;

export type Calculate<HAN extends NoHan | LowHan | HighHan | unknown, HU extends HuValue | unknown, SITUATION extends Situation> = HU extends HuValue ? HAN extends NoHan ? "NoPoint"
  : HAN extends LowHan ? Point[SITUATION][`han${HAN}`][`hu${HU}`] : HAN extends HighHan ? Point[SITUATION][`han${HAN}`] : "InvalidInput" : "InvalidHu";

type Point = {
  "ron-child": PointRonChild;
}

type PointRonChild = {
  "han1": {
    "hu30": "1000",
    "hu40": "1300",
    "hu50": "1600",
    "hu60": "2000",
    "hu70": "2300",
    "hu80": "2600",
    "hu90": "2900",
    "hu100": "3200",
    "hu110": "3600",
  },
  "han2": {
    "hu30": "2000",
    "hu40": "2600",
    "hu50": "3200",
    "hu60": "3900",
    "hu70": "4500",
    "hu80": "5200",
    "hu90": "5800",
    "hu100": "6400",
    "hu110": "7100",
  },
  "han3": {
    "hu30": "3900",
    "hu40": "5200",
    "hu50": "6400",
    "hu60": "7700",
    "hu70": "8000",
    "hu80": "8000",
    "hu90": "8000",
    "hu100": "8000",
    "hu110": "8000",
  },
  "han4": {
    "hu30": "7700",
    "hu40": "8000",
    "hu50": "8000",
    "hu60": "8000",
    "hu70": "8000",
    "hu80": "8000",
    "hu90": "8000",
    "hu100": "8000",
    "hu110": "8000",
  },
  "han5": "8000",
  "han6": "12000",
  "han7": "12000",
  "han8": "16000",
  "han9": "16000",
  "han10": "16000",
  "han11": "24000",
  "han12": "24000",
  "han13": "32000"
}