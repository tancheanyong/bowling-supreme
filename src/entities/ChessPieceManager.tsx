import React from "react";
import PawnPiece from "./chess_pieces/PawnPiece";
import { QueenPiece } from "./chess_pieces/QueenPiece";

enum ChessPieceNames {
  PAWN = "pawn",
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

const getRandomPosition = (): [number, number, number] => {
  const x = (Math.random() - 0.5) * 3;
  const z = (Math.random() - 0.5) * 3;
  return [x, 0.5, z];
};

const CHESS_PIECES: ChessPieceTypes[] = [
  {
    name: ChessPieceNames.QUEEN,
    color: ChessPieceColors.BLACK,
    position: getRandomPosition(),
  },
  {
    name: ChessPieceNames.QUEEN,
    color: ChessPieceColors.WHITE,
    position: getRandomPosition(),
  },
  {
    name: ChessPieceNames.PAWN,
    color: ChessPieceColors.WHITE,
    position: getRandomPosition(),
  },
  {
    name: ChessPieceNames.PAWN,
    color: ChessPieceColors.WHITE,
    position: getRandomPosition(),
  },
  {
    name: ChessPieceNames.PAWN,
    color: ChessPieceColors.WHITE,
    position: getRandomPosition(),
  },
  {
    name: ChessPieceNames.PAWN,
    color: ChessPieceColors.WHITE,
    position: getRandomPosition(),
  },
  {
    name: ChessPieceNames.PAWN,
    color: ChessPieceColors.WHITE,
    position: getRandomPosition(),
  },
  {
    name: ChessPieceNames.PAWN,
    color: ChessPieceColors.WHITE,
    position: getRandomPosition(),
  },
  {
    name: ChessPieceNames.PAWN,
    color: ChessPieceColors.WHITE,
    position: getRandomPosition(),
  },
  {
    name: ChessPieceNames.PAWN,
    color: ChessPieceColors.WHITE,
    position: getRandomPosition(),
  },
  {
    name: ChessPieceNames.PAWN,
    color: ChessPieceColors.BLACK,
    position: getRandomPosition(),
  },
  {
    name: ChessPieceNames.PAWN,
    color: ChessPieceColors.BLACK,
    position: getRandomPosition(),
  },
  {
    name: ChessPieceNames.PAWN,
    color: ChessPieceColors.BLACK,
    position: getRandomPosition(),
  },
  {
    name: ChessPieceNames.PAWN,
    color: ChessPieceColors.BLACK,
    position: getRandomPosition(),
  },
  {
    name: ChessPieceNames.PAWN,
    color: ChessPieceColors.BLACK,
    position: getRandomPosition(),
  },
  {
    name: ChessPieceNames.PAWN,
    color: ChessPieceColors.BLACK,
    position: getRandomPosition(),
  },
  {
    name: ChessPieceNames.PAWN,
    color: ChessPieceColors.BLACK,
    position: getRandomPosition(),
  },
  {
    name: ChessPieceNames.PAWN,
    color: ChessPieceColors.BLACK,
    position: getRandomPosition(),
  },
];

const ChessPieceManager = () => {
  return (
    <group>
      {CHESS_PIECES.map((piece) => {
        const { name, color, position } = piece;
        switch (name) {
          case ChessPieceNames.QUEEN:
            return <QueenPiece color={color} position={position} />;
          case ChessPieceNames.PAWN:
            return <PawnPiece color={color} position={position} />;
          default:
            return null;
        }
      })}
    </group>
  );
};

export default ChessPieceManager;
