import { Debug, Physics } from "@react-three/cannon";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Ball from "./entities/Ball";
import Pin from "./entities/Pin";
import Room from "./environment/Room";

const Scene = () => {
  return (
    <Suspense fallback={null}>
      <axesHelper />
      {/* <OrbitControls /> */}
      <ambientLight intensity={0.3} />
      <directionalLight intensity={1} position={[-1, 5, 0]} />
      <Physics>
        <Debug scale={1.001} color={"white"}>
          <Room />
          <Ball position={[0, 1, 7]} />
          <Pin position={[0, 1, -4]} size={[0.5, 1, 0.5]} mass={1} />
          <Pin position={[-0.5, 1, -4]} size={[0.5, 1, 0.5]} mass={1} />
          <Pin position={[0.5, 1, -4]} size={[0.5, 1, 0.5]} mass={1} />
        </Debug>
      </Physics>
    </Suspense>
  );
};

export default Scene;
