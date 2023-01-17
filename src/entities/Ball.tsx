import { useSphere } from "@react-three/cannon";
import React, { FC, useRef } from "react";
import { Mesh } from "three";

type BallProps = {
  position?: [number, number, number];
};

const Ball: FC<BallProps> = ({ position = [0, 0, 0] }) => {
  const [ballRef] = useSphere(
    () => ({ position, mass: 8, args: [0.5] }),
    useRef<Mesh>(null!)
  );
  return (
    <mesh ref={ballRef}>
      <sphereBufferGeometry args={[0.5]} />
      <meshStandardMaterial color={"black"} />
    </mesh>
  );
};

export default Ball;
