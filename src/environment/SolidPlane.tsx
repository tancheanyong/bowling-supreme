import { BoxProps, PlaneProps, useBox, usePlane } from "@react-three/cannon";
import { useTexture } from "@react-three/drei";
import { FC, useRef } from "react";
import { DoubleSide, Group, Mesh } from "three";

export type SolidPlaneProps = {
  texture?: string;
  size: [number, number];
  segments?: [number, number];
  rotation?: [number, number, number];
  position?: [number, number, number];
};

const SolidPlane: FC<SolidPlaneProps> = ({ texture, size, ...props }) => {
  const [floorRef] = useBox(
    () => ({ args: [...size, 0.01], ...props, rotation: [-Math.PI / 2, 0, 0] }),
    useRef<Mesh>(null!)
  );

  const { map } = useTexture({ map: texture as string });

  return (
    <mesh ref={floorRef}>
      <planeBufferGeometry args={size} />
      <meshStandardMaterial side={DoubleSide} map={map} />
    </mesh>
  );
};

export default SolidPlane;
