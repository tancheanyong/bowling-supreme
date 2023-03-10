import { useSphere } from "@react-three/cannon";
import React, { FC, useRef } from "react";
import { Mesh } from "three";

type BallProps = {
  position?: [number, number, number];
};

const Ball: FC<BallProps> = ({ position = [0, 0, 0] }) => {
  const [ballRef, api] = useSphere(
    () => ({
      position,
      mass: 0.5,
      args: [0.3],
      linearDamping: 0.31,
      angularDamping: 0.1,
    }),
    useRef<Mesh>(null!)
  );

  const onBallClick = () => {
    // api.applyImpulse([0, 0, -50], [0, 0, 0]);
    api.applyImpulse([0, 1, -10], [0, 0, 0]);
  };

  return (
    <mesh ref={ballRef} onClick={onBallClick}>
      <sphereBufferGeometry args={[0.3]} />
      <meshStandardMaterial color={"black"} />
    </mesh>
  );
};

export default Ball;
