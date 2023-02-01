import { BoxProps, PlaneProps, useBox, usePlane } from "@react-three/cannon";
import { useTexture } from "@react-three/drei";
import {
  BoxBufferGeometryProps,
  BufferGeometryProps,
} from "@react-three/fiber";
import { FC, useRef } from "react";
import { DoubleSide, Group, Mesh } from "three";
import useTextureWrapper from "../helpers/useTextureWrapper";
import { TextureTypes } from "../types/textures";

export type SolidPlaneProps = {
  textures: TextureTypes;
  geometry: BoxBufferGeometryProps;
  // size: [number, number];
  // segments?: [number, number];
  // rotation?: [number, number, number];
  // position?: [number, number, number];
};

const SolidPlane: FC<SolidPlaneProps> = ({ textures, geometry }) => {
  const { args, ...geometryProps } = geometry;
  const [floorRef] = useBox(
    () => ({
      args: [args[0], args[1], 0.01],
      ...geometryProps,
      rotation: [Math.PI / 2, 0, 0],
    }),
    useRef<Mesh>(null!)
  );

  const { map, aoMap, armMap, normalMap, displacementMap, roughnessMap } =
    useTextureWrapper(textures);

  return (
    <mesh ref={floorRef}>
      <planeBufferGeometry args={[args[0], args[1]]} />
      <meshStandardMaterial
        side={DoubleSide}
        map={map}
        aoMap={aoMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
      />
    </mesh>
  );
};

export default SolidPlane;
