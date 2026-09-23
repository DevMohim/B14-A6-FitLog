import Image from "next/image";
import footerLogo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="pt-4 px-4 bg-[#090A0D] border-t border-t-[#1A1D24]">
      <div className="container mx-auto pb-4 lg:py-10 flex flex-col gap-4 lg:flex-row justify-between items-center">
        <div className=" flex gap-2">
          <Image
            src={footerLogo}
            alt="Footer Logo"
            height={20}
            width={20}
            className="-rotate-45"
          ></Image>
          <p className="uppercase font-oswald text-white font-bold text-sm">
            fitlog
          </p>
        </div>
        <p className="text-[12px] text-[#6B7280]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
