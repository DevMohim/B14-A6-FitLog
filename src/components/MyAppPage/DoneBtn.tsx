import { useWorkoutContext } from "@/context/workoutContext";
import { IWorkoutType } from "@/types/workout.type";
import React, { useState } from "react";
import { toast } from "react-toastify";

const DoneBtn = ({
  activeTab,
  workout,
}: {
  activeTab: "today" | "saved";
  workout: IWorkoutType;
}) => {
  const { planCart, setPlanCart } = useWorkoutContext();
  const [isDone, setIsDone] = useState<boolean>(false);
  const handleDoneBtn = (id: number) => {
    const remainingWorkout = planCart.filter(
      (workout: IWorkoutType) => workout.id !== id,
    );
    setPlanCart(remainingWorkout);
    setIsDone(true);
    toast.success(`${workout.name} Done Successfully`);
  };
  return (
    <button
      className={` rounded-2xl text-black font-semibold text-[12px] px-5 py-2 cursor-pointer ${activeTab === "saved" ? "hidden" : ""} disabled:cursor-not-allowed ${isDone ? "bg-gray text-dark" : "bg-green"}`}
      onClick={() => handleDoneBtn(workout.id)}
      disabled={isDone}
    >
      {isDone ? "✓ Done" : "✓ Mark as done"}
    </button>
  );
};

export default DoneBtn;
