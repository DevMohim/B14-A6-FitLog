const LibrarySkeleton = () => {
  return (
    <section className="mt-16 pb-12 animate-pulse" id="library">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mb-8 space-y-2">
          <div className="h-9 w-48 rounded bg-[#232834]" />
          <div className="h-4 w-80 max-w-full rounded bg-[#232834]" />
        </div>

        {/* Workout cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-[#232834] bg-[#151922]"
            >
              {/* Image */}
              <div className="h-48 w-full bg-[#232834]" />

              {/* Card info */}
              <div className="p-6">
                <div className="flex gap-2">
                  <div className="h-5 w-20 rounded-full bg-[#232834]" />
                  <div className="h-5 w-24 rounded-full bg-[#232834]" />
                </div>

                <div className="mt-3 h-7 w-3/4 rounded bg-[#232834]" />
                <div className="mt-2 h-4 w-1/2 rounded bg-[#232834]" />

                <div className="mt-8 flex items-center gap-4">
                  <div className="h-4 w-16 rounded bg-[#232834]" />
                  <div className="h-4 w-20 rounded bg-[#232834]" />
                  <div className="h-4 w-12 rounded bg-[#232834]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LibrarySkeleton;
