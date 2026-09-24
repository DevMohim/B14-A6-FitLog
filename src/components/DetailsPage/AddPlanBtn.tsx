"use client";

import { useWorkoutContext } from "@/context/workoutContext";
import { IWorkoutType } from "@/types/workout.type";
import { LuCalendarPlus2 } from "react-icons/lu";
import { toast } from "react-toastify";

const AddPlanBtn = ({ workout }: { workout: IWorkoutType }) => {

  const { planCart, setPlanCart } = useWorkoutContext();

  const handleAddToPlan = () => {
    setPlanCart([...planCart, workout]);
    toast.success(`${workout.name} Added to today's plan`);
  };
  return (
    <button
      className="bg-green px-6 py-3 rounded-xl font-bold text-[12px] text-black tracking-[0.3px] cursor-pointer flex items-center gap-2"
      onClick={() => handleAddToPlan()}
    >
      <LuCalendarPlus2 className="w-4 h-4" /> <span>Add to todays plan</span>
    </button>
  );
};

export default AddPlanBtn;
