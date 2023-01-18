import React, { Suspense, useState } from "react";
import SolidPlane, { SolidPlaneProps } from "./SolidPlane";

const WALLS: SolidPlaneProps[] = [
  { size: [5, 20], rotation: [-Math.PI * 0.5, 0, 0] },
  {
    size: [5, 20],
    rotation: [-Math.PI * 0.5, -Math.PI * 0.5, 0],
    position: [-2.5, 2.5, 0],
  },
  {
    size: [5, 20],
    rotation: [-Math.PI * 0.5, Math.PI * 0.5, 0],
    position: [2.5, 2.5, 0],
  },
];

const Room = () => {
  const [walls, setWalls] = useState(WALLS);
  return (
    <group>
      {walls.length > 0 &&
        walls.map(({ rotation, size, position }) => (
          <SolidPlane rotation={rotation} size={size} position={position} />
        ))}
    </group>
  );
};

export default Room;
