import { useBox, usePlane } from "@react-three/cannon";
import { useRef } from "react";
import { DoubleSide, Group, Mesh } from "three";

const Room = () => {
  const [floorRef] = useBox(
    () => ({ rotation: [-Math.PI * 0.5, 0, 0], args: [5, 20, 0.01] }),
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
