import { Tile, TileMark } from "./tile";

export type Hand = [
  Tile, Tile, Tile,
  Tile, Tile, Tile,
  Tile, Tile, Tile,
  Tile, Tile, Tile,
  Tile, Tile
]

type Calculate<HAND extends Hand>