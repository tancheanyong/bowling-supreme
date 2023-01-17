import { Debug, Physics } from "@react-three/cannon";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Ball from "./entities/Ball";
import Room from "./environment/Room";

const Scene = () => {
  return (
    <Suspense fallback={null}>
      <axesHelper />
      <OrbitControls />
      <ambientLight intensity={1} />
      <directionalLight />
      <Physics>
        <Debug scale={1.001} color={"white"}>
          <Room />
          <Ball position={[0, 1, 7]} />
        </Debug>
      </Physics>
    </Suspense>
  );
};

export default Scene;
