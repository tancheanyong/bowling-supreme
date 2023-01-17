import React, { FC } from "react";

type BallProps = {
  position?: [number, number, number];
};

const Ball: FC<BallProps> = ({ position = [0, 0, 0] }) => {
  return (
    <mesh position={position}>
      <sphereBufferGeometry args={[0.5, 20, 30, 30]} />
      <meshStandardMaterial color={"black"} />
    </mesh>
  );
};

export default Ball;
