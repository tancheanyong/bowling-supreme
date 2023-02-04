import { Texture } from "three";

export type TextureTypes = {
  map?: string;
  aoMap?: string;
  normalMap?: string;
  roughnessMap?: string;
  displacementMap?: string;
  armMap?: string;
};

export type ProcessedTextureTypes = {
  map?: Texture;
  aoMap?: Texture;
  normalMap?: Texture;
  roughnessMap?: Texture;
  displacementMap?: Texture;
  armMap?: Texture;
};

export const CHESS_ASSET_SCALE = 0.33;
