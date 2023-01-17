import React from "react";

const Ball = () => {
  return (
    <mesh>
      <sphereBufferGeometry args={[0.5, 20, 30, 30]} />
      <meshStandardMaterial color={"black"} />
    </mesh>
  );
};

export default Ball;
