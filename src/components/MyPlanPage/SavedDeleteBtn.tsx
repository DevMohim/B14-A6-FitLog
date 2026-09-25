import { useWorkoutContext } from "@/context/workoutContext";
import { IWorkoutType } from "@/types/workout.type";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";

const DeleteBtn = ({ workout }: { workout: IWorkoutType }) => {
  const { savedCart, setSavedCart } = useWorkoutContext();

  const handleDeleteClick = (id: number) => {
    const remaingingWorkout = savedCart.filter(
      (workout: IWorkoutType) => workout.id !== id,
    );
    setSavedCart(remaingingWorkout);
    toast.info(`${workout.name} remove successfully`);
  };
  return (
    <span
      className="w-7 h-7 flex justify-center items-center cursor-pointer"
      onClick={() => handleDeleteClick(workout.id)}
    >
      <RxCross2 className="text-[#6B7280] text-2xl" />
    </span>
  );
};

export default DeleteBtn;
