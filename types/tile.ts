import {Num} from "./utilType"

export type TileMark = "I" | "o" | "C"
export type BambooTile = `I${Num}`
export type CircleTile = `o${Num}`
export type CharacterTile = `C${Num}`
export type SuitTile = BambooTile | CircleTile | CharacterTile

export type DragonTile = "white" | "green" | "red"
export type WindTile = "east" | "south" | "west" | "north"
export type HonourTile = WindTile | DragonTile

export type Tile = SuitTile | HonourTile

export type TileSet = [Tile, Tile, Tile]
export type TilePair = [Tile, Tile]