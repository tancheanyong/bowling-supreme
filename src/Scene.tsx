import { Debug, Physics } from "@react-three/cannon";
import { Environment, OrbitControls, useHelper } from "@react-three/drei";
import { Suspense, useRef } from "react";
import Ball from "./entities/Ball";
import Pin, { PinProps } from "./entities/Pin";
import BoxPin from "./entities/BoxPin";
import Room from "./environment/Room";
import { ChessBoard } from "./environment/ChessBoard";
import SolidPlane from "./environment/SolidPlane";
import { TextureTypes } from "./types/textures";
import {
  DoubleSide,
  Group,
  Mesh,
  DirectionalLight,
  DirectionalLightHelper,
} from "three";
import ChessPieceManager from "./entities/ChessPieceManager";

const PINS: PinProps[] = [
  {
    size: [1, 1, 1],
    position: [-1, 1, 0],
    mass: 1,
  },
  {
    size: [1, 1, 1],
    position: [0, 1, 0],
    mass: 1,
  },
  {
    size: [1, 1, 1],
    position: [1, 1, 0],
    mass: 1,
  },
];

const TABLE_TEXTURES: TextureTypes = {
  map: "/assets/table/textures/wood_table_worn_diff_2k.jpg",
  aoMap: "/assets/table/textures/wood_table_worn_ao_2k.jpg",
  roughnessMap: "/assets/table/textures/wood_table_worn_rough_2k.jpg",
  normalMap: "/assets/table/textures/wood_table_worn_nor_gl_2k.jpg",
  displacementMap: "/assets/table/textures/wood_table_worn_disp_2k.jpg",
};

const Scene = () => {
  const lightRef = useRef<DirectionalLight>(null!);

  useHelper(lightRef, DirectionalLightHelper);
  return (
    <Suspense fallback={null}>
      <Environment files={"/kiara_interior_1k.hdr"} background />
      <axesHelper />
      <OrbitControls />
      <ambientLight intensity={0.2} color={"#ffd09e"} />
      <directionalLight
        color={"#fadbaa"}
        ref={lightRef}
        intensity={0.5}
        position={[3, 1, -2]}
        castShadow
        shadow-camera-left={-0.5}
        shadow-camera-bottom={-0.5}
        shadow-camera-top={0.5}
        shadow-camera-right={0.5}
      />
      <Physics>
        <Debug scale={1.001} color={"white"}>
          {/* <mesh castShadow position={[0, 0.2, 0]}>
            <sphereBufferGeometry args={[0.2, 16, 16]} />
            <meshStandardMaterial color={"white"} />
          </mesh> */}
          <ChessPieceManager />
          <ChessBoard />
          <SolidPlane
            textures={TABLE_TEXTURES}
            geometry={{ args: [2, 2], position: [0, -0.0, 0] }}
          />
          {/* <Ball position={[0, 1, 7]} /> */}
          {/* <Room />
          {PINS.map((pin) => (
            <Pin size={pin.size} position={pin.position} mass={pin.mass} />
          ))} */}
        </Debug>
      </Physics>
    </Suspense>
  );
};

export default Scene;
