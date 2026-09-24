"use client";

import { IWorkoutType } from "@/types/workout.type";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

interface CartContextType {
  planCart: IWorkoutType[];
  setPlanCart: Dispatch<SetStateAction<IWorkoutType[]>>;
  savedCart: IWorkoutType[];
  setSavedCart: Dispatch<SetStateAction<IWorkoutType[]>>;
}

export const workoutContext = createContext<CartContextType | undefined>(
  undefined,
);

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [planCart, setPlanCart] = useState<IWorkoutType[]>([]);
  const [savedCart, setSavedCart] = useState<IWorkoutType[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const storedPlanCart = localStorage.getItem("planCart");
      const storedSavedCart = localStorage.getItem("savedCart");

      if (storedPlanCart) {
        setPlanCart(JSON.parse(storedPlanCart));
      }

      if (storedSavedCart) {
        setSavedCart(JSON.parse(storedSavedCart));
      }
    } catch {
      throw new Error("Could not load cart from localStorage:");
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem("planCart", JSON.stringify(planCart));
  }, [planCart, isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem("savedCart", JSON.stringify(savedCart));
  }, [savedCart, isLoaded]);

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
    throw new Error("useWorkoutContext must be used inside WorkoutProvider");
  }

  return context;
};

export default WorkoutProvider;
