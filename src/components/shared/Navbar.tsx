"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { useWorkoutContext } from "@/context/workoutContext";


const links = [
  { href: "/", label: "Workouts" },
  { href: "/my-plan", label: "My Plan" },
];

const Navbar = () => {
  const [isMenuClick, setIsMenuClick] = useState<boolean>(false);
  const pathname = usePathname();

  const handleMenuClick = () => {
    setIsMenuClick(!isMenuClick);
  };

  const {planCart,savedCart} = useWorkoutContext()

  const navlinks = links.map(({ href, label }) => {
    const isActive = pathname === href;

    return (
      <li key={href} className="mr-2">
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
    <nav className="bg-darkBlack border-b border-b-navStrock fixed top-0 left-0 z-50 w-full px-4 ">
      <div className="navbar container mx-auto flex justify-between text-center">
        {/* Hamburger icon for mobile menu */}
        <div className="block lg:hidden">
          <GiHamburgerMenu
            className="text-gray text-2xl cursor-pointer "
            onClick={handleMenuClick}
          />
        </div>
        {/* left */}
        <div className="">
          <Link href='/'>
            <div className="flex gap-2.5 items-center">
              <Image
                src={Logo}
                alt="Fit-log Logo"
                height={28}
                width={28}
              ></Image>
              <h1 className="uppercase text-lg font-black tracking-[0.9px] font-oswald text-white">
                Fitlog
              </h1>
            </div>
          </Link>
        </div>
        {/* middle */}
        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>
        {/* right */}
        <div className=" flex gap-6 items-center">
          <Link href="/my-plan">
            <div className="flex gap-2 items-center cursor-pointer">
              <h1 className="text-gray font-inter text-[12px] font-medium">
                Plan
              </h1>
              <div className="w-5 h-5  flex justify-center items-center bg-[#ccff00] rounded-full text-black font-bold text-[11px]">
                {planCart.length}
              </div>
            </div>
          </Link>
          <Link href="/my-plan">
            <div className="flex gap-2 items-center cursor-pointer">
              <h1 className="text-darkGray font-inter text-[12px] font-medium">
                Saved
              </h1>
              <div className="w-5 h-5  flex justify-center items-center border border-[#2D313B] rounded-full text-gray font-bold text-[11px]">
                {savedCart.length}
              </div>
            </div>
          </Link>
        </div>
      </div>

      {isMenuClick && (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-40 cursor-default"
          onClick={() => setIsMenuClick(false)}
        />
      )}

      {/* Mobile menu */}
      <div
        aria-hidden={!isMenuClick}
        className={`absolute top-14 left-0 right-0 z-50 overflow-hidden rounded-lg bg-dark p-4
    transition-[max-height,opacity,visibility] duration-200 ease-in-out
    lg:hidden
    ${
      isMenuClick
        ? "visible max-h-96 opacity-100"
        : "invisible max-h-0 opacity-0"
    }`}
      >
        <ul className="menu menu-vertical px-1">{navlinks}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
