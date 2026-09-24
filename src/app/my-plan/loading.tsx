const MyPlanPageSkeleton = () => {
  return (
    <section className="mt-14 animate-pulse">
      <div className="container mx-auto space-y-6 px-4 py-10">
        {/* Heading */}
        <div className="space-y-2">
          <div className="h-9 w-40 rounded bg-[#232834]" />
          <div className="h-4 w-80 max-w-full rounded bg-[#232834]" />
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 rounded-2xl bg-[#13161D] px-6 py-8">
          <div className="space-y-2">
            <div className="h-3 w-16 rounded bg-[#232834]" />
            <div className="h-10 w-12 rounded bg-[#232834]" />
          </div>

          <div className="space-y-2 border-l border-[#232732]/60 pl-9">
            <div className="h-3 w-14 rounded bg-[#232834]" />
            <div className="h-10 w-16 rounded bg-[#232834]" />
          </div>

          <div className="space-y-2 border-l border-[#232732]/60 pl-9">
            <div className="h-3 w-16 rounded bg-[#232834]" />
            <div className="h-10 w-16 rounded bg-[#232834]" />
          </div>
        </div>

        {/* Tabs and sort */}
        <div className="flex items-center justify-between">
          <div className="flex h-12.5 w-48 items-center gap-2 rounded-xl border border-[#232732] bg-[#151921] p-1">
            <div className="h-9 w-24 rounded-md bg-[#232834]" />
            <div className="h-9 w-16 rounded-md bg-[#232834]" />
          </div>

          <div className="flex items-center gap-2">
            <div className="h-4 w-12 rounded bg-[#232834]" />
            <div className="h-12 w-36 rounded-lg bg-[#13161D]" />
          </div>
        </div>

        {/* Workout cards */}
        <div className="grid grid-cols-1 gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="h-56 w-full rounded-2xl bg-[#151922]" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyPlanPageSkeleton;
