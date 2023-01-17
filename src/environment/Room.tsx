import { usePlane } from "@react-three/cannon";
import { useRef } from "react";
import { DoubleSide, Group, Mesh } from "three";

const Room = () => {
  const [floorRef] = usePlane(
    () => ({ rotation: [-Math.PI * 0.5, 0, 0] }),
    useRef<Mesh>(null!)
  );

  return (
    <group>
      <mesh ref={floorRef}>
        <planeBufferGeometry args={[5, 20]} />
        <meshStandardMaterial color={"brown"} side={DoubleSide} />
      </mesh>
    </group>
  );
};

export default Room;
