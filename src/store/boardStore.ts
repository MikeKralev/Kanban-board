import { create } from "zustand";
import type { Board } from "../types/kanban";
import { initialBoard } from "../mockData";

type BoardStore = {
  board: Board;
  setBoard: (board: Board) => void;
};

export const useBoardStore = create<BoardStore>((set) => ({
  board: initialBoard,
  setBoard: (board) => set({ board }),
}));
