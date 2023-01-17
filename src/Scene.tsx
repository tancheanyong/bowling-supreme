import { Physics } from "@react-three/cannon";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Ball from "./entities/Ball";
import Room from "./environment/Room";

const Scene = () => {
  return (
    <Suspense fallback={null}>
      <gridHelper />
      <axesHelper />
      <OrbitControls />
      <ambientLight intensity={1} />
      <Physics>
        <Room />
        <Ball position={[0, 1, 4]} />
      </Physics>
    </Suspense>
  );
};

export default Scene;
