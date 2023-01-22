import { useBox } from "@react-three/cannon";
import React, { FC, useRef } from "react";
import { Mesh } from "three";

export type PinProps = {
  size: [number, number, number];
  segments?: [number, number];
  rotation?: [number, number, number];
  position?: [number, number, number];
  mass?: number;
};

const Pin: FC<PinProps> = ({ size, ...props }) => {
  const [pinRef] = useBox(
    () => ({ args: [...size], ...props }),
    useRef<Mesh>(null!)
  );

  return (
    // TODO:  Use a proper model
    <mesh ref={pinRef}>
      <boxBufferGeometry args={size} />
      <meshStandardMaterial color={"white"} />
    </mesh>
  );
};

export default Pin;
