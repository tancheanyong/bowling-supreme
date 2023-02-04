import { useTexture } from "@react-three/drei";
import React, { FC } from "react";
import { ProcessedTextureTypes, TextureTypes } from "../types/textures";
import { Texture } from "three";

const useTextureWrapper = (textures: TextureTypes) => {
  const defaultedTextures: Record<string, string> = structuredClone(textures);

  for (const texture of Object.keys(defaultedTextures)) {
    if (!defaultedTextures[texture]) {
      delete defaultedTextures[texture];
    }
  }

  const finalTextures: ProcessedTextureTypes = useTexture(defaultedTextures);

  return finalTextures;
};

export default useTextureWrapper;
