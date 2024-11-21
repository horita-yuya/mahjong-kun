import { Equal, Not, Num, Or, OrAll } from "./utilType";

export type TileMark = "I" | "o" | "C";
export type BambooTile = `I${Num}`;
export type CircleTile = `o${Num}`;
export type CharacterTile = `C${Num}`;
export type SuitTile = BambooTile | CircleTile | CharacterTile;

export type DragonTile = "white" | "green" | "red";
export type WindTile = "east" | "south" | "west" | "north";
export type HonourTile = WindTile | DragonTile;

export type Tile = SuitTile | HonourTile;

export type TileSet = [Tile, Tile, Tile];
export type TilePair = [Tile, Tile];

export type IsOne<TILE extends Tile> = TILE extends `${TileMark}${infer X}`
  ? Equal<X, "1">
  : false;
export type IsNine<TILE extends Tile> = TILE extends `${TileMark}${infer X}`
  ? Equal<X, "9">
  : false;

export type IsWind<TILE extends Tile> = OrAll<
  [
    Equal<TILE, "east">,
    Equal<TILE, "south">,
    Equal<TILE, "west">,
    Equal<TILE, "north">,
  ]
>;
export type IsDragon<TILE extends Tile> = OrAll<
  [Equal<TILE, "white">, Equal<TILE, "green">, Equal<TILE, "red">]
>;
export type IsHonour<TILE extends Tile> = Or<IsWind<TILE>, IsDragon<TILE>>;

export type IsYaochu<TILE extends Tile> = OrAll<
  [IsOne<TILE>, IsNine<TILE>, IsHonour<TILE>]
>;
export type IsChunChan<TILE extends Tile> = Not<IsYaochu<TILE>>;
