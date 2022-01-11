export type Calculate<HAN extends 1 | 2 | 3 | 4, HU extends 30 | 40 | 50, CASE extends "ron-child"> = CASE extends "ron-child" ? PointRonChild[`han${HAN}`][`hu${HU}`] : never

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
    "hu70": "mangan",
    "hu80": "mangan",
    "hu90": "mangan",
    "hu100": "mangan",
    "hu110": "mangan",
  },
  "han4": {
    "hu30": "7700",
    "hu40": "mangan",
    "hu50": "mangan",
    "hu60": "mangan",
    "hu70": "mangan",
    "hu80": "mangan",
    "hu90": "mangan",
    "hu100": "mangan",
    "hu110": "mangan",
  }
}