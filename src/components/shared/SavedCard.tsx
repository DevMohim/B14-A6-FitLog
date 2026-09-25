import { IWorkoutType } from "@/types/workout.type";
import Image from "next/image";
import { FaRegClock, FaRegStar } from "react-icons/fa";
import { TbFlameFilled } from "react-icons/tb";
import SavedDeleteBtn from "../MyPlanPage/SavedDeleteBtn";
import Link from "next/link";

const SavedCard = ({ workout }: { workout: IWorkoutType }) => {
  const { id, image, name, equipment, duration, caloriesBurned, rating } =
    workout;

  return (
    <div className="flex justify-between items-center p-4 bg-[#14171E] border border-[#232732] rounded-2xl ">
      {/* left */}
      <div className="flex gap-4 items-center">
        <Image src={image} alt={name} width={80} height={144} />
        {/* info */}
        <div>
          <h1 className="font-oswald text-white font-bold">{name}</h1>
          <p className="font-semibold text-[#8A92A0] text-[12px]">
            {equipment}
          </p>
          <div className="text-darkGray text-[12px] ">
            <div className="pt-2 flex items-center gap-4">
              <p className="flex gap-1.5 items-center">
                <span>
                  <FaRegClock className="text-green" />
                </span>
                {duration} min
              </p>
              <p className="flex gap-1.5 items-center">
                <span>
                  <TbFlameFilled className="scale-x-[-1] text-green" />
                </span>
                {caloriesBurned}kcal
              </p>
              <p className="flex gap-1.5 items-center">
                <span>
                  <FaRegStar className="text-green" />
                </span>
                {rating}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="flex items-center gap-3">
        <Link href={`/${id}`}>
          <button className="border border-[#374151] rounded-2xl text-white text-[12px] px-5 py-2 cursor-pointer">
            View Details
          </button>
        </Link>
        <SavedDeleteBtn workout={workout} />
      </div>
    </div>
  );
};

export default SavedCard;
