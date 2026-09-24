const DetailsPageSkeleton = () => {
  return (
    <section className="mb-16 mt-16 animate-pulse text-white">
      <div className="container mx-auto grid grid-cols-1 gap-14 px-4 py-12 lg:grid-cols-2">
        {/* Image */}
        <div className="h-120 w-full rounded-2xl bg-[#151922] lg:h-175" />

        {/* Details */}
        <div className="flex flex-col">
          <div className="mb-7">
            <div className="mb-4 h-10 w-3/4 rounded bg-[#232834]" />
            <div className="mb-2 h-4 w-full rounded bg-[#232834]" />
            <div className="h-4 w-2/3 rounded bg-[#232834]" />

            <div className="mt-5 flex gap-2">
              <div className="h-6 w-20 rounded-full bg-[#232834]" />
              <div className="h-6 w-24 rounded-full bg-[#232834]" />
              <div className="h-6 w-16 rounded-full bg-[#232834]" />
            </div>
          </div>

          {/* Details table */}
          <div className="mb-8 overflow-hidden rounded-2xl border border-[#232834] bg-[#151922]">
            {Array.from({ length: 7 }).map((_, index) => (
              <div
                key={index}
                className={`flex h-[52px] items-center justify-between px-6 ${
                  index > 0 ? "border-t border-[#1E2330]" : ""
                }`}
              >
                <div className="h-3 w-20 rounded bg-[#232834]" />
                <div className="h-4 w-24 rounded bg-[#232834]" />
              </div>
            ))}
          </div>

          {/* Instructions */}
          <div className="mb-9">
            <div className="mb-5 h-5 w-32 rounded bg-[#232834]" />

            <div className="space-y-3">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="h-4 w-full rounded bg-[#232834]" />
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <div className="h-12 w-40 rounded-xl bg-[#232834]" />
            <div className="h-12 w-40 rounded-xl bg-[#232834]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsPageSkeleton;
