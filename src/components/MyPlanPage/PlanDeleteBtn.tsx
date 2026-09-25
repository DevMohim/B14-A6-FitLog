import { useWorkoutContext } from "@/context/workoutContext";
import { IWorkoutType } from "@/types/workout.type";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";

const PlanDeleteBtn = ({
  workout,
  activeTab,
}: {
  workout: IWorkoutType;
  activeTab: "today" | "saved";
}) => {
  const { planCart, setPlanCart, savedCart, setSavedCart } =
    useWorkoutContext();

  const handleDeleteClick = (id: number) => {
    const remainingTodayWorkout = planCart.filter(
      (workout: IWorkoutType) => workout.id !== id,
    );
    const remainingSavedWorkout = savedCart.filter(
      (workout: IWorkoutType) => workout.id !== id,
    );

    if (activeTab === "today") {
      setPlanCart(remainingTodayWorkout);
    } else {
      setSavedCart(remainingSavedWorkout);
    }
    toast.info(`${workout.name} remove successfully`);
  };
  return (
    <button type="button"
      className="w-7 h-7 flex justify-center items-center cursor-pointer"
      onClick={() => handleDeleteClick(workout.id)}
    >
      <RxCross2 className="text-[#6B7280] text-2xl" />
    </button>
  );
};

export default PlanDeleteBtn;
