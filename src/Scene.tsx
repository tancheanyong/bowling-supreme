import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Room from "./environment/Room";

const Scene = () => {
  return (
    <Suspense fallback={null}>
      <gridHelper />
      <axesHelper />
      <OrbitControls />
      <ambientLight intensity={1} />
      <Room />
    </Suspense>
  );
};

export default Scene;
