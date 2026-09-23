"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const links = [
  { href: "/workouts", label: "Workouts" },
  { href: "/my-plan", label: "My Plan" },
];

const Navbar = () => {
  const pathname = usePathname();

  const navlinks = links.map(({ href, label }) => {
    const isActive = pathname === href;

    return (
      <li key={href}>
        <Link
          href={href}
          className={`rounded-2xl text-[12px] font-medium transition-all duration-150 ease-in-out ${
            isActive
              ? "bg-green/15 text-green"
              : "text-darkGray hover:bg-gray/15"
          }`}
        >
          {label}
        </Link>
      </li>
    );
  });
  return (
    <nav className="bg-darkBlack border-b border-b-navStrock px-4 md:px-2 lg:px-0">
      <div className="navbar container mx-auto flex justify-between text-center">
        {/* Hamburger icon for mobile menu */}
        <div className="block lg:hidden">
          <GiHamburgerMenu className="text-gray text-2xl cursor-pointer "/>
        </div>
        {/* left */}
        <div className="">
          <div className="flex gap-2.5 items-center">
            <Image src={Logo} alt="Fit-log Logo" height={28} width={28}></Image>
            <h1 className="uppercase text-lg font-black tracking-[0.9px] font-oswald text-white">
              Fitlog
            </h1>
          </div>
        </div>
        {/* middle */}
        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>
        {/* right */}
        <div className=" flex gap-6 items-center">
          <div className="flex gap-2 items-center cursor-pointer">
            <h1 className="text-gray font-inter text-[12px] font-medium">
              Plan
            </h1>
            <div className="w-5 h-5  flex justify-center items-center bg-green rounded-full text-black font-bold text-[11px]">
              0
            </div>
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <h1 className="text-darkGray font-inter text-[12px] font-medium">
              Saved
            </h1>
            <div className="w-5 h-5  flex justify-center items-center bg-green rounded-full text-black font-bold text-[11px]">
              0
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
