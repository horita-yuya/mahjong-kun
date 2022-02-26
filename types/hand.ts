import { Tile } from "./tile";

export type Hand = [
  Tile, Tile, Tile,
  Tile, Tile, Tile,
  Tile, Tile, Tile,
  Tile, Tile, Tile,
  Tile, Tile
]

export type Chunk1<HAND extends Hand> = [HAND[0], HAND[1], HAND[2]]
export type Chunk2<HAND extends Hand> = [HAND[3], HAND[4], HAND[5]]
export type Chunk3<HAND extends Hand> = [HAND[6], HAND[7], HAND[8]]
export type Chunk4<HAND extends Hand> = [HAND[9], HAND[10], HAND[11]]
export type Pair<HAND extends Hand> = [HAND[12], HAND[13]]