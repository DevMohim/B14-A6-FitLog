import React from "react";

const LibrarySkeleton = () => {
  return (
    <section
      className="mt-16 pb-12"
      aria-busy="true"
      aria-label="Loading workouts"
    >
      <div className="container mx-auto px-4">
        <div className="mb-8 space-y-1">
          <div className="h-9 w-48 animate-pulse rounded bg-[#232834]" />
          <div className="h-5 w-72 animate-pulse rounded bg-[#232834]" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="h-105 w-full animate-pulse rounded-2xl bg-[#151922]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LibrarySkeleton;