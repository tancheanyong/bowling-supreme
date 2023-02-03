import React from "react";
import { QueenPiece } from "./chess_pieces/QueenPiece";

enum ChessPieceNames {
  QUEEN = "queen",
}

export enum ChessPieceColors {
  WHITE = "white",
  BLACK = "black",
}

type ChessPieceTypes = {
  name: ChessPieceNames;
  color: ChessPieceColors;
  position?: [number, number, number];
};

export type ChessPieceProps = Omit<ChessPieceTypes, "name">;

const CHESS_PIECES: ChessPieceTypes[] = [
  {
    name: ChessPieceNames.QUEEN,
    color: ChessPieceColors.BLACK,
    position: [1, 0.5, 1],
  },
  { name: ChessPieceNames.QUEEN, color: ChessPieceColors.WHITE },
];

const ChessPieceManager = () => {
  return (
    <group>
      {CHESS_PIECES.map((piece) => {
        const { name, color, position } = piece;
        switch (name) {
          case ChessPieceNames.QUEEN:
            return <QueenPiece color={color} position={position} />;
          default:
            return null;
        }
      })}
    </group>
  );
};

export default ChessPieceManager;
