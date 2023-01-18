import { BoxProps, PlaneProps, useBox, usePlane } from "@react-three/cannon";
import { FC, useRef } from "react";
import { DoubleSide, Group, Mesh } from "three";

type SolidPlaneProps = {
  size: [number, number];
  segments?: [number, number];
  rotation?: [number, number, number];
};

const SolidPlane: FC<SolidPlaneProps> = ({ size, rotation }) => {
  const [floorRef] = useBox(
    () => ({ args: [...size, 0.01], rotation }),
    useRef<Mesh>(null!)
  );

  return (
    <mesh ref={floorRef}>
      <planeBufferGeometry args={size} />
      <meshStandardMaterial color={"brown"} side={DoubleSide} />
    </mesh>
  );
};

export default SolidPlane;
