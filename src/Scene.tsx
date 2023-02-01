import { Debug, Physics } from "@react-three/cannon";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Ball from "./entities/Ball";
import Pin, { PinProps } from "./entities/Pin";
import BoxPin from "./entities/BoxPin";
import Room from "./environment/Room";
import { ChessBoard } from "./environment/ChessBoard";
import SolidPlane from "./environment/SolidPlane";

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

const Scene = () => {
  return (
    <Suspense fallback={null}>
      <Environment files={"/kiara_interior_1k.hdr"} background />
      <axesHelper />
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.5} position={[5, 5, -10]} />
      <Physics>
        <Debug scale={1.001} color={"white"}>
          <ChessBoard />
          <SolidPlane
            texture="/assets/table/textures/wood_table_worn_diff_1k.jpg"
            size={[2, 2]}
          />
          {/* <Room />
          <Ball position={[0, 1, 7]} />
          {PINS.map((pin) => (
            <Pin size={pin.size} position={pin.position} mass={pin.mass} />
          ))} */}
        </Debug>
      </Physics>
    </Suspense>
  );
};

export default Scene;
