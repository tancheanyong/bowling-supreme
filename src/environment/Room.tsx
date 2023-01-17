import { DoubleSide } from "three";

const Room = () => {
  return (
    <group>
      <mesh rotation={[Math.PI * 0.5, 0, 0]}>
        <planeBufferGeometry args={[5, 20]} />
        <meshStandardMaterial color={"brown"} side={DoubleSide} />
      </mesh>
    </group>
  );
};

export default Room;
