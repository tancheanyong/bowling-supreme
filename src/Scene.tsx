import { Debug, Physics } from "@react-three/cannon";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Ball from "./entities/Ball";
import Pin, { PinProps } from "./entities/Pin";
import BoxPin from "./entities/BoxPin";
import Room from "./environment/Room";

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
      <axesHelper />
      <OrbitControls />
      <ambientLight intensity={0.3} />
      <directionalLight intensity={1} position={[-1, 5, -10]} />
      <Physics>
        <Debug scale={1.001} color={"white"}>
          <Room />
          <Ball position={[0, 1, 7]} />
          {PINS.map((pin) => (
            <Pin size={pin.size} position={pin.position} mass={pin.mass} />
          ))}
        </Debug>
      </Physics>
    </Suspense>
  );
};

export default Scene;
