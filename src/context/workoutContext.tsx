'use client'
import { IWorkoutType } from "@/types/workout.type";
import { createContext, Dispatch, useContext, useState, type ReactNode } from "react";

interface CartContextType {
  planCart: IWorkoutType[];
  setPlanCart: Dispatch<React.SetStateAction<IWorkoutType[]>>;
  savedCart: IWorkoutType[];
  setSavedCart: Dispatch<React.SetStateAction<IWorkoutType[]>>;
}

export const workoutContext = createContext<CartContextType>({
  planCart: [],
  setPlanCart: () => {},
  savedCart: [],
  setSavedCart: () => {},
});

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [planCart, setPlanCart] = useState<IWorkoutType[]>([]);
  const [savedCart, setSavedCart] = useState<IWorkoutType[]>([]);

  const cartObj: CartContextType = {
    planCart,
    setPlanCart,
    savedCart,
    setSavedCart,
  };

  return (
    <workoutContext.Provider value={cartObj}>
      {children}
    </workoutContext.Provider>
  );
};

export const useWorkoutContext = () => {
  const context = useContext(workoutContext);

  if (!context) {
    throw new Error("useAppContext must be used inside AppProvider");
  }

  return context;
};
export default WorkoutProvider;
