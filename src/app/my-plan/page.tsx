"use client";

import PlanCard from "@/components/shared/PlanCard";
import { useWorkoutContext } from "@/context/workoutContext";
import { IWorkoutType } from "@/types/workout.type";
import { useState } from "react";

const MyPlanPage = () => {
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
  const { planCart, savedCart } = useWorkoutContext();

  const currentCart = activeTab === "today" ? planCart : savedCart;

  const totalMinutes = currentCart.reduce(
    (acc, workout) => acc + workout.duration,
    0,
  );

  const totalCalories = currentCart.reduce(
    (acc, workout) => acc + workout.caloriesBurned,
    0,
  );

  return (
    <section className="mt-14">
      <div className="container mx-auto space-y-6 px-4 py-10">
        {/* Heading */}
        <div className="space-y-2">
          <h1 className="font-oswald text-3xl font-bold tracking-[-0.75px] text-white">
            My plan
          </h1>
          <p className="text-sm text-[#8A92A0]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Metrics summary */}
        <div className="grid grid-cols-3 rounded-2xl bg-[#13161D] px-6 py-8">
          <div>
            <p className="text-[12px] text-[#8A92A0]">Exercises</p>
            <h2 className="font-oswald text-4xl font-bold text-green">
              {currentCart.length}
            </h2>
          </div>

          <div className="border-l border-[#232732]/60 pl-9">
            <p className="text-[12px] text-[#8A92A0]">Minutes</p>
            <h2 className="font-oswald text-4xl font-bold text-white">
              {totalMinutes}
            </h2>
          </div>

          <div className="border-l border-[#232732]/60 pl-9">
            <p className="text-[12px] text-[#8A92A0]">Calories</p>
            <h2 className="font-oswald text-4xl font-bold text-white">
              {totalCalories}
            </h2>
          </div>
        </div>

        {/* Tabs and sort */}
        <div className="flex items-center justify-between">

         {/* tabs side */}
          <div className="h-12.5 rounded-xl border border-[#232732] bg-[#151921] p-1">
            <div className="tabs bg-[#151921]">
              <input
                type="radio"
                name="my_tabs_1"
                className="tab text-[#8A92A0] checked:rounded-md checked:border checked:border-[#2B303D] checked:bg-[#1F242D] checked:px-4 checked:py-1.5 checked:text-[12px] checked:font-bold checked:text-white"
                aria-label="Today's plan"
                checked={activeTab === "today"}
                onChange={() => setActiveTab("today")}
              />

              <input
                type="radio"
                name="my_tabs_1"
                className="tab text-[#8A92A0] checked:rounded-md checked:border checked:border-[#2B303D] checked:bg-[#1F242D] checked:px-4 checked:py-1.5 checked:text-[12px] checked:font-bold checked:text-white"
                aria-label="Saved"
                checked={activeTab === "saved"}
                onChange={() => setActiveTab("saved")}
              />
            </div>
          </div>

          {/* sort side */}
          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="w-full text-[12px] text-[#8A92A0]">
              Sort By
            </label>
            <select
              id="sort"
              defaultValue="Duration"
              className="select rounded-lg border-[#232732] bg-[#13161D] pr-14 text-white"
            >
              <option>Duration</option>
              <option>Calories</option>
              <option>Rating</option>
            </select>
          </div>
        </div>

        {/* Workout cards */}
        <div className="grid grid-cols-1 gap-4">
          {currentCart.map((workout: IWorkoutType) => (
            <PlanCard key={workout.id} workout={workout} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyPlanPage;
