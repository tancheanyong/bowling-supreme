import { useBox } from "@react-three/cannon";
import React, { FC, useRef } from "react";
import { Mesh } from "three";

export type BoxPinProps = {
  size: [number, number, number];
  segments?: [number, number];
  rotation?: [number, number, number];
  position?: [number, number, number];
  mass?: number;
};

const BoxPin: FC<BoxPinProps> = ({ size, ...props }) => {
  const [boxPinRef] = useBox(
    () => ({ args: [...size], ...props }),
    useRef<Mesh>(null!)
  );

  return (
    // TODO:  Use a proper model
    <mesh ref={boxPinRef}>
      <boxBufferGeometry args={size} />
      <meshStandardMaterial color={"white"} />
    </mesh>
  );
};

export default BoxPin;
