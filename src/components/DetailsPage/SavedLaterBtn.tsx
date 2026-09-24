"use client";

import { useWorkoutContext } from "@/context/workoutContext";
import { IWorkoutType } from "@/types/workout.type";
import { FaRegBookmark } from "react-icons/fa";
import { toast } from "react-toastify";

const AddPlanBtn = ({ workout }: { workout: IWorkoutType }) => {

  const { savedCart, setSavedCart } = useWorkoutContext();

  const handleSavedLaterBtn = () => {
    setSavedCart([...savedCart, workout]);
    toast.info(`${workout.name} saved for later`);
  };

  return (
    <button
      className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-[12px] text-[#E5E7EB] border border-[#374151] tracking-[0.3px] cursor-pointer"
      onClick={() => handleSavedLaterBtn()}
    >
      <FaRegBookmark className="w-4 h-4" />
      <span>Save for later</span>
    </button>
  );
};

export default AddPlanBtn;
