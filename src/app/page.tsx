import Banner from "@/components/HomePage/Banner";
import LibrarySkeleton from "@/components/HomePage/LibrarySkleton";
import WorkoutLibrary from "@/components/HomePage/WorkoutLibrary";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Banner />
      <Suspense fallback={<LibrarySkeleton />}>
        <WorkoutLibrary />
      </Suspense>
    </>
  );
}
