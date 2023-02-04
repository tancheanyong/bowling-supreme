import { useCylinder } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
import React, { FC, useRef } from "react";
import { CHESS_ASSET_SCALE } from "../../types/textures";
import { ChessPieceColors, ChessPieceProps } from "../ChessPieceManager";
import { DoubleSide, Group, Mesh } from "three";

const PawnPiece: FC<ChessPieceProps> = ({ color, position = [0, 1, 0] }) => {
  const { nodes, materials } = useGLTF("/assets/chess/scene.gltf");

  const [ref] = useCylinder(
    () => ({
      args: [0.07, 0.12, 0.37],
      rotation: [0, 0, 0],
      position,
      mass: 0.1,
      allowSleep: true,
      sleepSpeedLimit: 0.07,
      sleepTimeLimit: 0.01,
    }),
    useRef<Group>(null!)
  );

  return (
    <group ref={ref}>
      {color === ChessPieceColors.BLACK ? (
        <mesh
          scale={CHESS_ASSET_SCALE}
          geometry={(nodes as any).Object_46.geometry}
          material={materials.Black_Piece}
          position={[0, -0.18, 0]}
        />
      ) : (
        <mesh
          scale={CHESS_ASSET_SCALE}
          geometry={(nodes as any).Object_46.geometry}
          material={materials.White_Piece}
          position={[0, -0.18, 0]}
        />
      )}
    </group>
  );
};

export default PawnPiece;
