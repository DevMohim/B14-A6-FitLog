import { IWorkoutType } from "@/types/workout.type";
import Image from "next/image";
import Link from "next/link";
import { FaRegClock, FaRegStar } from "react-icons/fa";
import { TbFlameFilled } from "react-icons/tb";

export interface WorkOutCardProps {
  workout: IWorkoutType;
}

export default function WorkOutCard({ workout }: WorkOutCardProps) {
  const {
    id,
    image,
    name,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = workout;

  return (
    <Link href={`/${id}`}>
      <div className="rounded-2xl bg-dark border border-cardStrock hover:border-green/50 transition-all duration-250 ease-in-out">
        {/* img */}
        <div>
          <Image
            src={image}
            alt={name}
            height={62}
            width={392}
            className="w-full rounded-t-2xl h-48 object-cover"
          ></Image>
        </div>
        {/* info */}
        <div className="p-6 ">
          <div className="space-y-1">
            <ul className="flex items-center gap-2 text-black font-bold text-[11px]">
              {muscleGroups.map((item: string, ind: number) => (
                <li key={ind} className="px-2.5 py-0.5 bg-green rounded-full">
                  {item}
                </li>
              ))}
            </ul>
            <h1 className="font-oswald font-bold text-lg tracking-[0.45px] text-white leading-7 uppercase mt-2.5">
              {name}
            </h1>
            <p className="text-[12px] text-darkGray">{equipment}</p>
          </div>
          <div className="mt-4 text-darkGray text-[12px] ">
            <div className="pt-4 flex items-center gap-4">
              <p className="flex gap-1.5 items-center">
                <span>
                  <FaRegClock />
                </span>
                {duration} min
              </p>
              <p className="flex gap-1.5 items-center">
                <span>
                  <TbFlameFilled className="scale-x-[-1]" />
                </span>
                {caloriesBurned}kcal
              </p>
              <p className="flex gap-1.5 items-center">
                <span>
                  <FaRegStar />
                </span>
                {rating}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
