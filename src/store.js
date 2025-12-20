import { create } from "zustand";
import { combine } from "zustand/middleware";

export const useGameStore = create(
  combine(
    {
      history: [Array(9).fill(null)],
      currentMove: 0,
    },
    (set, get) => {
      return {
        setHistory: (nextHistory) => {
          set((state) => ({
            history:
              typeof nextHistory === "function"
                ? nextHistory(state.history)
                : nextHistory,
          }));
        },
        setCurrentMove: (move) => {
            set((state) => ({
                currentMove:
                    typeof move === "function"
                     ? move(state.currentMove)
                     : move,
            }))
        }
      };
    }
  )
);
