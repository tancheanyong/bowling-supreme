import React, { Suspense, useState } from "react";
import SolidPlane from "./SolidPlane";

type wallParams = {
  size: [number, number];
  segments?: [number, number];
  rotation?: [number, number, number];
};

const WALLS: wallParams[] = [
  { size: [5, 20], rotation: [-Math.PI * 0.5, 0, 0] },
];

const Room = () => {
  const [walls, setWalls] = useState(WALLS);
  return (
    <group>
      {walls.length > 0 &&
        walls.map(({ rotation, size }) => (
          <SolidPlane rotation={rotation} size={size} />
        ))}
    </group>
  );
};

export default Room;
