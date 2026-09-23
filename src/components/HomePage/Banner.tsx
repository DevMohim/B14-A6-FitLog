import Image from "next/image";
import BannerImage from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="mt-12 px-4 ">
      <div className="container mx-auto bg-dark border border-cardStrock p-14 flex flex-col lg:flex-row justify-between items-center rounded-2xl ">
        {/* left */}
        <div className="space-y-5 text-center lg:text-left">
          <h3 className="text-green font-bold text-[11px] tracking-[1.1px] uppercase">
            Workout library
          </h3>
          <h1 className="font-oswald text-white font-extrabold tracking-[-1.5px] text-4xl lg:text-6xl uppercase">
            Train With Intent. Log <br /> Every Set.
          </h1>
          <p className="text-darkGray text-[12px] lg:text-[16px]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            <br />
            into todays plan, and watch the weeks work add up.
          </p>
          <button className="bg-green px-6 py-3 rounded-md font-bold text-[12px] text-black tracking-[0.3px] cursor-pointer">
            Browse Workouts
          </button>
        </div>
        {/* middle */}
        <div className="w-25 h-25 hidden lg:block"></div>
        {/* right */}
        <div className="mt-10 lg:mt-0">
          <Image
            src={BannerImage}
            alt="Banner Image"
            height={334}
            width={334}
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Banner;
