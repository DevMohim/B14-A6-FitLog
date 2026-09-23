import getData from "@/lib/getData";
import { IWorkoutType } from "@/types/workout.type";
import React from "react";
import WorkOutCard from "../shared/WorkOutCard";

const WorkoutLibrary = async () => {
  const workouts = await getData();
  return (
    <section className="mt-16">
      <div className="container mx-auto px-4">
        {/* heading */}
        <div className="space-y-1 mb-8">
          <h1 className="font-oswald font-bold text-3xl tracking-[-0.75px] text-white">
            The Library
          </h1>
          <p className="text-[14px] text-darkGray">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* all Card section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workouts.map((workout: IWorkoutType) => (
            <WorkOutCard key={workout.id} workout={workout} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkoutLibrary;
